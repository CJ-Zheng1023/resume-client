import http from '@/utils/request'
import { companyResult } from './model/company'
import { generalResult } from './model/general'
import { projectResult } from './model/project'
import { skillResult } from './model/skill'
export const showHome = () => {
  return http.get<generalResult>('/home')
}
export const showProject = () => {
  return http.get<projectResult>('/project')
}
export const showCompany = () => {
  return http.get<companyResult>('/company')
}
export const showSkill = () => {
  return http.get<skillResult>('/skill')
}
