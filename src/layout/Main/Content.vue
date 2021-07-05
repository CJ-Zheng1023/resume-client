<template>
  <div class="content">
    <router-view :key="fullPath" #default="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    return {
      fullPath: route.fullPath
    }
  }
})
</script>

<style scoped lang="less">
.content {
  .flexItem(content);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>