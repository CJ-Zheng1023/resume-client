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
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import MyProgress from '@/components/progress/Index.vue'
import { showSkill } from '@/api'
import { skillResult } from '@/api/model/skill'
export default defineComponent({
  components: {
    MyProgress
  },
  setup() {
    const skills: skillResult = []
    const state = reactive({
      loading: false,
      skills
    })
    onMounted(async () => {
      const res = await showSkill()
      state.skills = res.data
    })
    return {
      ...toRefs(state)
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