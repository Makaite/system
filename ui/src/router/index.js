import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '../utils/auth'

import Layout from '@/components/Layout/index.vue'

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
    path: '',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/echarts',
    component: Layout,
    children: [
      {
        path: '',
        component: import('@/views/echarts/index.vue')
      }
    ]
  },
  {
    path: '/antv-x6',
    component: Layout,
    children: [
      {
        path: '',
        component: import('@/views/antv-x6/index.vue')
      }
    ]
  },
  {
    path: '/test',
    // component: Layout,
    children: [
      {
        path: '',
        component: import('@/views/test/index.vue')
      }
    ]
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