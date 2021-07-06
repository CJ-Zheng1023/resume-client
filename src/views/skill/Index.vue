<template>
  <div class="page">
    <div class="skill">
      <div class="skill-item" v-for="(item, index) in skills" :key="index">
        <div class="skill-item__title">{{ item.name }}</div>
        <my-progress :value="item.score"></my-progress>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MyProgress from '@/components/progress/Index.vue'
export default defineComponent({
  components: {
    MyProgress
  },
  setup() {
    const skills = [
      {
        name: 'HTML5',
        score: 85
      },
      {
        name: 'CSS3',
        score: 80
      },
      {
        name: 'VUE',
        score: 80
      },
      {
        name: 'JQUERY',
        score: 90
      },
      {
        name: 'ES6',
        score: 80
      },
      {
        name: 'UNI-APP',
        score: 75
      },
      {
        name: 'ELECTRON',
        score: 70
      },
      {
        name: 'WEBPACK',
        score: 70
      },
      {
        name: 'GULP',
        score: 70
      },
      {
        name: 'TYPESCRIPT',
        score: 65
      }
    ]
    return {
      skills
    }
  }
})
</script>

<style scoped lang="less">
@skill: .skill;
@{skill}{
  @{skill}-item{
    max-width: 600px;
    &+@{skill}-item{
      margin-top: 20px;
    }
    @{skill}-item__title{
      color: @color2;
      font-weight: 400;
      font-size: @fontSize3;
      margin-bottom: 10px;
    }
  }
}
</style>