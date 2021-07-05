import { RouteRecordRaw } from 'vue-router'
import { MenuIconEnum } from '@/enums/MenuIconEnum'
export const commonRoutes = [
  {
    path: '/home',
    name: 'Home',
    icon: MenuIconEnum.HOME,
    component: () => import('@/views/home/Index.vue'),
    meta: {
      title: '个人概况'
    }
  },
  {
    path: '/company',
    name: 'Company',
    icon: MenuIconEnum.COMPANY,
    component: () => import('@/views/company/Index.vue'),
    meta: {
      title: '工作经历'
    }
  },
  {
    path: '/project',
    name: 'Project',
    icon: MenuIconEnum.PROJECT,
    component: () => import('@/views/project/Index.vue'),
    meta: {
      title: '项目经验'
    }
  },
  {
    path: '/skill',
    name: 'Skill',
    icon: MenuIconEnum.SKILL,
    component: () => import('@/views/skill/Index.vue'),
    meta: {
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
