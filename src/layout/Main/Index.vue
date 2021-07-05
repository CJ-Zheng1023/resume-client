<template>
  <div class="flexible flexible--column">
    <app-header />
    <app-content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './Header.vue'
import AppContent from './Content.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppContent
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
</style>