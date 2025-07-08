import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@pages': '/src/pages'
    }
  },
  optimizeDeps: {
    include: ['styled-components']
  }
})
