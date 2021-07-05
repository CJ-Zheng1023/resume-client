import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'
const ACTIVE_CLASS_NAME = 'menu-item--active'
const CLASS_NAME = 'menu-item'
export function useMenuItemClick() {
  const item = ref<any>(null)
  useEventListener(item, 'click', e => {
    const $menus = document.querySelectorAll(`.${CLASS_NAME}`)
    const array: Array<Element> = Array.from($menus)
    const $activeMenu = array.find($menu => $menu.className.includes(ACTIVE_CLASS_NAME))
    const removedClassName = `${$activeMenu!.className} `.replace(`${ACTIVE_CLASS_NAME} `, '').trim()
    $activeMenu!.className = removedClassName
    const addedClassName = `${item.value.className} ${ACTIVE_CLASS_NAME}`
    item.value.className = addedClassName
  })
  return item
}
