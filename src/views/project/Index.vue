<template>
  <div class="page">
    <div class="project">
      <timeline-item extendable="true" v-for="(project, index) in projects" :key="index">
        <template #title>
          <div class="project__title">
            <div class="project__text">{{ project.name }}</div>
            <div class="project__tag">
              <tag>{{ project.startTime + '-' + project.endTime }}</tag>
            </div>
          </div>
        </template>
        <template #default>
          {{ project.description }}
        </template>
      </timeline-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimelineItem from '@/components/timelineItem/Index.vue'
import Tag from '@/components/tag/Index.vue'
export default defineComponent({
  components: {
    TimelineItem,
    Tag
  },
  setup() {
    const projects = [
      {
        name: 'abc',
        startTime: '2020.1',
        endTime: '2021.6',
        description: 'asdfadfadfasfdafdfad'
      }
    ]
    return {
      projects
    }
  }
})
</script>

<style scoped lang="less">
@project: .project;
@{project}{
  @{project}__title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @{project}__text{
    color: @color2;
    font-size: @fontSize3;
    font-weight: 400;
  }
  @{project}__tag{
    margin-left: 20px;
  }
}
</style>