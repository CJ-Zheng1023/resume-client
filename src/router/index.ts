import { createRouter, createWebHistory } from 'vue-router'
import { commonRoutes, notFoundRoute } from './config'
const routes = [
  {
    name: 'Layout',
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/Index.vue'),
    children: [...commonRoutes]
  },
  notFoundRoute
]
const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})
export default router
