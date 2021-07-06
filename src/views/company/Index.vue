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
        name: 'dr',
        startTime: '2020.1.1',
        endTime: '至今',
        works: ['adfadf', 'adfadf', 'asdfasfdaf']
      },
      {
        name: 'dr',
        startTime: '2020.1.1',
        endTime: '至今',
        works: [
          'adfadf',
          'adfadf',
          'asdfasfdsadfadfadf大法师打发斯蒂芬阿士大夫撒打发的asdfdsfsadfasdf打法撒旦af'
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