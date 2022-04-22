<template>
  <div class="content">
    <n-scrollbar style="max-height: 100%;">
      <router-view :key="fullPath" #default="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </n-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useMessage, NScrollbar } from 'naive-ui'
export default defineComponent({
  components: {
    NScrollbar
  },
  setup() {
    const route = useRoute()
    window.$message = useMessage()
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
  transition: all 0.5s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>