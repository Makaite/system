import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '../utils/auth'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from) => {
  if(to.path !== '/login'){
    if(!getToken()) {
      return '/login?redirect=' + to.fullPath
    }
  }
})

export default router