import { createWebHashHistory, createRouter } from 'vue-router'

const whiteList = ['/login', '/test'] // no redirect whitelist

const routes = [
  {
    path: '/',
    component: () => import("@/views/home/index.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/login/index.vue")
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const hastoken = localStorage.getItem('token')
  if (hastoken) {
    if (to.path === '/login') {
      console.log('login page ')
    } else {
      // 这里做权限配置
    }
  } else {
    // 没有token
    let isWhiteRouter = whiteList.find(item => item === to.path)
    if (isWhiteRouter) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
  next()
})