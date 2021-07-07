<template>
  <div :class="['drawer', { 'drawer--opened': drawerOpened }]">
    <div class="drawer__inner">123</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useEventListener } from '@vueuse/core'
export default defineComponent({
  setup() {
    const store = useStore()
    function deactivate(e: Event) {
      if (document.querySelector('.drawer')?.contains(e.target as Node)) {
        return
      }
      if (document.querySelector('.skin')?.contains(e.target as Node)) {
        return
      }
      store.dispatch('app/setDrawerOpened', false)
    }
    useEventListener('click', deactivate)
    return {
      drawerOpened: computed(() => store.getters['app/drawerOpened'])
    }
  }
})
</script>

<style scoped lang="less">
@drawer: .drawer;
@width: 300px;
@{drawer}{
  position: fixed;
  right: -@width;
  top: 0;
  bottom: 0;
  box-shadow: 1px 1px 3px 0 #333;
  transition: right .4s;
  width: @width;
  &@{drawer}--opened{
    right: 0;
  }
  @{drawer}__inner{
    height: 100%;
    overflow-y: auto;
    background-color: #fff;
    padding: 16px 20px;
  }
}
</style>