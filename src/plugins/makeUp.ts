import { defaultCssVar, cacheKey } from '@/config'
import { storage } from '@/utils/storage'
const install = function () {
  const cacheCssVar = storage.get(cacheKey.skin)
  const vars = cacheCssVar ? cacheCssVar : defaultCssVar
  makeUp(vars)
}
export const makeUp = function (vars: Record<string, string>) {
  Object.keys(vars).forEach(key => {
    document.documentElement.style.setProperty(key, vars[key])
  })
}
export default {
  install
}
