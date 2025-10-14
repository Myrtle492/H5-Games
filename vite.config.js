import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ✅ 确保 base 为根路径
export default defineConfig({
  base: '/', // ⚠️ 必须是 '/'，不要写 '/homepage/'
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
  }
})

