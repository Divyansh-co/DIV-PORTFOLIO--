import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 5000
const FRONTEND_URL = process.env.FRONTEND_URL || '*'

// In-memory message store (can be connected to MongoDB, PostgreSQL, or Redis)
const messages = []

/**
 * Standard CORS headers
 */
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Max-Age', '86400')
}

/**
 * Send JSON response
 */
function sendJson(res, statusCode, data) {
  setCorsHeaders(res)
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(data))
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase())
}

const server = http.createServer((req, res) => {
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res)
    res.writeHead(204)
    res.end()
    return
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`)
  const pathname = parsedUrl.pathname

  // 1. Health check endpoint
  if (req.method === 'GET' && (pathname === '/api/health' || pathname === '/health')) {
    return sendJson(res, 200, {
      status: 'ok',
      service: 'Divyansh Portfolio API',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
    })
  }

  // 2. Contact form endpoint
  if (req.method === 'POST' && pathname === '/api/contact') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
      // Guard against payload flood (> 1MB)
      if (body.length > 1e6) {
        req.destroy()
      }
    })

    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}')
        const { name, email, message } = data

        // Validation
        if (!name || !name.trim()) {
          return sendJson(res, 400, {
            success: false,
            error: 'Name is required.',
          })
        }

        if (!email || !isValidEmail(email)) {
          return sendJson(res, 400, {
            success: false,
            error: 'A valid email address is required.',
          })
        }

        if (!message || !message.trim()) {
          return sendJson(res, 400, {
            success: false,
            error: 'Message content cannot be empty.',
          })
        }

        const entry = {
          id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          receivedAt: new Date().toISOString(),
          ip: req.socket.remoteAddress,
        }

        messages.push(entry)

        console.log(`[Contact API] Received message from "${entry.name}" <${entry.email}>:`)
        console.log(`"${entry.message}"\n`)

        return sendJson(res, 201, {
          success: true,
          message: 'Thank you for reaching out! Divyansh has received your message.',
          receivedId: entry.id,
        })
      } catch (err) {
        console.error('[Contact API] Parsing Error:', err)
        return sendJson(res, 400, {
          success: false,
          error: 'Invalid JSON payload.',
        })
      }
    })
    return
  }

  // 3. Admin / Retrieval endpoint for local testing
  if (req.method === 'GET' && pathname === '/api/messages') {
    return sendJson(res, 200, {
      total: messages.length,
      messages,
    })
  }

  // 4. Static files fallback (if dist/ exists)
  const distDir = path.join(__dirname, '..', 'dist')
  if (fs.existsSync(distDir)) {
    let filePath = path.join(distDir, pathname === '/' ? 'index.html' : pathname)
    if (!fs.existsSync(filePath)) {
      filePath = path.join(distDir, 'index.html')
    }

    const ext = path.extname(filePath).toLowerCase()
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
    }

    try {
      const content = fs.readFileSync(filePath)
      setCorsHeaders(res)
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' })
      res.end(content)
      return
    } catch {
      // Fall through to 404
    }
  }

  // 404 Not Found
  sendJson(res, 404, {
    error: 'Endpoint not found',
    path: pathname,
  })
})

server.listen(PORT, () => {
  console.log(`\n==========================================`)
  console.log(`🚀 Portfolio Backend Server Running!`)
  console.log(`📡 URL: http://localhost:${PORT}`)
  console.log(`💓 Health: http://localhost:${PORT}/api/health`)
  console.log(`📬 Contact API: http://localhost:${PORT}/api/contact`)
  console.log(`==========================================\n`)
})
