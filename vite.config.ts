import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    // 自动引入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动解析
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: '/',    // 开发环境
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
