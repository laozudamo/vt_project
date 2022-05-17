import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'

import './styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// function registerIcon(app: App) {
//   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
//   }
// }

function setpApp() {
  const app = createApp(App)
  
  // 初始化pinia
  setupStore(app)

  // 注册icon图标
  // registerIcon(app)

  // 使用elementPlus
  app.use(ElementPlus)

  // 使用路由
  app.use(router)

  // 挂载
  app.mount('#app')
}

setpApp()

