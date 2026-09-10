import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine base path for GitHub Pages subdirectory deployment
// Vite runs this config in Node, so we use a safe approach
const base = (() => {
  try {
    // eslint-disable-next-line no-undef
    const env = process && process.env && process.env.BASE_PATH
    return env || './'
  } catch {
    return './'
  }
})()

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },
})
