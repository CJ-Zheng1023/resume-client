<template>
  <div class="page">
    <div class="home">
      <div class="home__title">
        <span class="home__text">您好，我叫</span>
        <span class="home__text home__text--special">{{ info.name }}</span>
      </div>
      <div class="home__tags">
        <div class="tags">
          <tag v-for="(tag, index) in jobs" :key="index">{{ tag }}</tag>
        </div>
      </div>
      <div class="home__description">{{ description }}</div>
      <div class="home__info">
        <div class="home__title">
          <span class="home__text">基本信息</span>
        </div>
        <div class="infos">
          <property :label="map[key]" :content="value" v-for="(value, key) in info" :key="key"></property>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from '@/components/tag/Index.vue'
import Property from '@/components/property/Index.vue'
export default defineComponent({
  components: {
    Tag,
    Property
  },
  setup() {
    const general = {
      jobs: ['前端工程师'],
      description: `有着将近九年的前后端开发经验，针对前后端主流的技术有着一定的了解。 能够熟练使用vue及相关技术栈。对小程序开发，electron，gulp，rollup，webpack，typescript等技术都有一定的了解。 工作细心，团队合作意识强，乐于分享和交流自己的心得。 喜欢探索和研究新技术，勇于实践。`,
      info: {
        name: '郑成杰',
        address: '沈阳市浑南区中海康城小区',
        email: 'cj_zheng1023@hotmail.com',
        phone: '18640394243'
      }
    }
    const map = {
      name: '姓名',
      address: '家庭住址',
      email: '邮箱',
      phone: '电话'
    }
    return {
      ...general,
      map
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