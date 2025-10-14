import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ✅ Vite 全局配置（支持 GitHub Pages + 自定义域名）
export default defineConfig({
  // 自定义域名必须用根路径
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  }
})
