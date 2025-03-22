import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginNodePolyfills from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    VitePluginNodePolyfills() 
  ],
  resolve: {
    alias: {
      crypto: 'crypto-browserify'  
    }
  }
})
