<template>
  <div :class="['container', { 'container--reactive': !isMd }]">
    <div class="sidebar">
      <side-bar />
    </div>
    <div class="main">
      <app-main />
    </div>
  </div>
  <drawer />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import AppMain from './Main/Index.vue'
import SideBar from './sidebar/Index.vue'
import Drawer from './drawer/Index.vue'
import { useMediaQuery } from '@vueuse/core'
import { useStore } from 'vuex'
import useIsMd from '@/hooks/useIsMd'
export default defineComponent({
  components: {
    AppMain,
    SideBar,
    Drawer
  },
  setup() {
    const isMd = useMediaQuery('(min-width: 992px)')
    const store = useStore()
    watch(
      () => isMd.value,
      val => {
        store.dispatch('app/setIsMd', val)
      },
      {
        immediate: true
      }
    )
    return {
      isMd: useIsMd()
    }
  }
})
</script>

<style scoped lang="less">
.container {
  .clearfix();
  padding: @containerPadding;
  height: 100%;
  &.container--reactive {
    padding: 10px;
    .main {
      margin-left: @reactiveMainMarginLeft;
    }
    .sidebar {
      width: @reactiveSideBarWidth;
    }
  }
  .main {
    margin-left: @mainMarginLeft;
    height: 100%;
  }
  .sidebar {
    float: left;
    width: @sideBarWidth;
    height: 100%;
  }
}
</style>