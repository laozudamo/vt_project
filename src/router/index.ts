import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import("@/views/login/index.vue")
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})