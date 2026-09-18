import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Use subpath only when deploying via GitHub Actions, otherwise root '/' for Vercel & local
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS && !process.env.VERCEL ? '/DIV-PORTFOLIO--/' : '/'),
})
