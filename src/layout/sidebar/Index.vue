<template>
  <div class="flexible flexible--column">
    <app-logo />
    <app-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from './Logo.vue'
import AppMenu from './Menu.vue'

export default defineComponent({
  components: {
    AppLogo,
    AppMenu
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
</style>