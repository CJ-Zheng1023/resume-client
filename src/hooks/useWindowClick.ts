import { useEventListener } from '@vueuse/core'
import { Ref } from 'vue'
export const deactivateLinkNav = function (toggleClicked: Ref<boolean>) {
  function deactivate(e: Event) {
    if (document.querySelector('.toggle')?.contains(e.target as Node)) {
      return
    }
    toggleClicked.value = false
  }
  useEventListener('click', deactivate)
}
