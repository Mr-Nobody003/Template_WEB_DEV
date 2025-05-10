import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true'
    ? '/Template_WEB_DEV/' // Base path for GitHub Pages ,Must match GitHub repo name
    : undefined, // Root path for Vercel
  plugins: [react(), tailwindcss()],
})
