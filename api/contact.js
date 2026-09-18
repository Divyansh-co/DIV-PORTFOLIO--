function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase())
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body || {}

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Name is required.' })
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' })
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message content cannot be empty.' })
    }

    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    console.log(`[Contact API] Message received from "${name}" <${email}>:\n"${message}"`)

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Divyansh has received your message.',
      receivedId: messageId,
    })
  } catch (err) {
    console.error('[Contact API Error]:', err)
    return res.status(500).json({ success: false, error: 'Failed to process message.' })
  }
}
