import { RouteRecordRaw } from 'vue-router'
import { MenuIconEnum } from '@/enums/MenuIconEnum'
export const commonRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Index.vue'),
    meta: {
      icon: MenuIconEnum.HOME,
      title: '个人概况'
    }
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/company/Index.vue'),
    meta: {
      icon: MenuIconEnum.COMPANY,
      title: '工作经历'
    }
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/project/Index.vue'),
    meta: {
      icon: MenuIconEnum.PROJECT,
      title: '项目经验'
    }
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('@/views/skill/Index.vue'),
    meta: {
      icon: MenuIconEnum.SKILL,
      title: '专业技能'
    }
  }
]
export const notFoundRoute = {
  path: '/404',
  name: '404',
  component: () => import('@/views/404/Index.vue'),
  meta: {
    title: '404'
  }
}
