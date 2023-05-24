import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    proxy: {
    '/api':{
       changeOrigin: true,
       secure: false,
       target: 'https://api.oxalus.trade/',
       rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
})
