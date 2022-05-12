import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: './',    // 开发环境
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: join(__dirname, "src/")
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variable.scss';`
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
