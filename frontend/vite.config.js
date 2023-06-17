import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/money-sage/',
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
})
