<template>
  <div class="page">
    <div class="home">
      <div class="home__title">
        <span class="home__text">您好，我叫</span>
        <span class="home__text home__text--special">{{ state.general.info.name }}</span>
      </div>
      <div class="home__tags">
        <div class="tags">
          <tag v-for="(tag, index) in state.general.jobs" :key="index">{{ tag }}</tag>
        </div>
      </div>
      <div class="home__description">{{ state.general.description }}</div>
      <div class="home__info">
        <div class="home__title">
          <span class="home__text">基本信息</span>
        </div>
        <div class="infos">
          <property :label="map[key]" :content="value" v-for="(value, key) in state.general.info" :key="key"></property>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import Tag from '@/components/tag/Index.vue'
import Property from '@/components/property/Index.vue'
import { showHome } from '@/api'
export default defineComponent({
  components: {
    Tag,
    Property
  },
  setup() {
    const general = {
      info: {
        name: '',
        address: '',
        email: '',
        phone: ''
      },
      jobs: [],
      description: ''
    }
    const state = reactive({
      loading: false,
      general
    })
    const map = {
      name: '姓名',
      address: '家庭住址',
      email: '邮箱',
      phone: '电话'
    }
    onMounted(async () => {
      const { data } = await showHome()
      Object.assign(state.general, data)
    })
    return {
      map,
      state
    }
  }
})
</script>

<style scoped lang="less">
@home: .home;
@{home}{
  @{home}__title{
    padding: 16px 0;
  }
  @{home}__text{
    font-size: @fontSize3;
    color: @color2;
    font-weight: 400;
    padding: 8px 6px 8px 0;
    &@{home}__text--special{
      padding: 8px 6px;
      background-color: @color1;
    }
  }
  @{home}__description{
    line-height: 1.4;
    font-size: @fontSize5;
    color: @color2;
    margin-top: 30px;
    font-weight: 200;
  }
  @{home}__info{
    margin-top: 60px;
  }
}
</style>