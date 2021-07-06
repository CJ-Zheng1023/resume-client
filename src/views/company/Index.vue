<template>
  <div class="page">
    <div class="company" v-for="(company, index) in companies" :key="index">
      <div class="company__title">{{ company.name }}</div>
      <div class="company__sub">
        <tag>{{ company.startTime + '-' + company.endTime }}</tag>
      </div>
      <div class="company__list">
        <list-item v-for="(work, index) in company.works" :key="index">{{ work }}</list-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from '@/components/listItem/Index.vue'
import Tag from '@/components/tag/Index.vue'
export default defineComponent({
  components: {
    ListItem,
    Tag
  },
  setup() {
    const companies = [
      {
        name: '东软集团股份有限公司',
        startTime: '2012.7',
        endTime: '至今',
        works: [
          '制定前端开发规范，并应用到实际项目，提高前端团队开发效率。',
          '参与前端技术选型，调研，前端架构的设计以及对项目核心模块的开发工作。',
          '参与制定前后端接口规范。',
          '负责项目公共组件的开发，主要涉及基于jquery，vue等前端框架的公共组件开发。'
        ]
      }
    ]
    return {
      companies
    }
  }
})
</script>

<style scoped lang="less">
@company: .company;
@{company}{
  &+@{company}{
    margin-top: 60px;
  }
  @{company}__title{
    color: @color2;
    font-size: @fontSize3;
    font-weight: 400;
  }
  @{company}__sub{
    margin-top: 16px;
  }
  @{company}__list{
    margin-top: 20px;
  }
}
</style>