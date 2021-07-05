import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir: string): string => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/styles/global.less";'
      }
    }
  },
  server: {
    host: 'localhost',
    port: 8888,
    open: true
  }
})
