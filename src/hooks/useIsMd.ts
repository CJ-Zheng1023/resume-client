import { useStore } from 'vuex'
import { computed } from 'vue'
export default function () {
  const store = useStore()

  return computed(() => store.getters['app/isMd'])
}
