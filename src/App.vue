<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NMessageProvider } from 'naive-ui'
export default defineComponent({
  name: 'App',
  components: {
    NMessageProvider
  }
})
</script>

<style lang="less">
#app {
  height: 100vh;
  background-image: linear-gradient(
    135deg,
    #f5f7fa 0%,
    #c3cfe2 100%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
