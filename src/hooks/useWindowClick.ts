import { useEventListener } from '@vueuse/core'
import { Ref } from 'vue'
export default function (toggleClicked: Ref<boolean>) {
  function deactivate(e: Event) {
    toggleClicked.value = false
  }
  useEventListener('click', deactivate)
}
