import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()  // Directly use the default export plugin
  ],
  resolve: {
    alias: {
      crypto: 'crypto-browserify'  // Polyfill for 'crypto'
    }
  },
  server: {
    port: 3000  // Set the port to 3000 (or any other available port)
  }
})
