import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // 👈 Backend server URL
        changeOrigin: true,              // Ensures correct host header
        secure: false                    // Allows HTTP (not only HTTPS)
      },
    },
  },
})
