<template>
  <div :class="['menubox', { 'menubox--reactive': !isMd }]">
    <div class="menubox__inner flexible flexible--column">
      <div class="menubox__menu">
        <div class="menu">
          <menu-item v-for="(item, index) in commonRoutes" :isFirst="index === 0" :key="item.name" :menuItem="item"></menu-item>
        </div>
      </div>
      <div class="menubox__link">
        <div class="link">
          <div class="link-item">
            <a href="https://github.com/CJ-Zheng1023" target="_blank">
              <Icon>
                <LogoGithub />
              </Icon>
            </a>
          </div>
          <div class="link-item">
            <a href="https://afterwin.cn" target="_blank">
              <Icon>
                <Link />
              </Icon>
            </a>
          </div>
          <div class="link-item">
            <a href="https://v3.cn.vuejs.org/" target="_blank">
              <Icon>
                <LogoVue />
              </Icon>
            </a>
          </div>
          <div class="link-item">
            <a href="https://www.naiveui.com/" target="_blank">
              <Icon>
                <Layout />
              </Icon>
            </a>
          </div>
          <div class="link-item">
            <a href="https://vueuse.org/" target="_blank">
              <Icon>
                <Toolbox16Regular />
              </Icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useIsMd from '@/hooks/useIsMd'
import { commonRoutes } from '@/router/config'
import MenuItem from './MenuItem.vue'
import { Icon } from '@vicons/utils'
import { LogoVue, LogoGithub, Link } from '@vicons/ionicons5'
import { Layout } from '@vicons/carbon'
import { Toolbox16Regular } from '@vicons/fluent'
export default defineComponent({
  components: {
    MenuItem,
    Icon,
    LogoVue,
    LogoGithub,
    Link,
    Layout,
    Toolbox16Regular
  },
  setup() {
    return {
      isMd: useIsMd(),
      commonRoutes
    }
  }
})
</script>

<style scoped lang="less">
@menuBox: .menubox;
@{menuBox} {
  .flexItem(menu);
  &@{menuBox}--reactive{
    height: auto;
    flex-grow: 1;
    @{menuBox}__link{
      display: none;
    }
  }
  @{menuBox}__inner{
    height: 100%;
    padding: 10px 0;
  }
  @{menuBox}__menu{
    flex-grow: 1;
    height: 0;
  }
  @{menuBox}__link{
    flex-shrink: 0;
  }
}
@menu: .menu;
@{menu}{
  height: 100%;
  overflow-y: auto;
}
@link: .link;
@{link}{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
}
@linkItem: .link-item;
@{linkItem}{
  padding: 4px;
  border-radius: 4px;
  &:hover{
    background-color: @color2;
    a{
      color: @color1;
    }
  }
  a{
    font-size: @fontSize3;
    color: @color2;
    line-height: 1;
    /deep/ .xicon{
      display: block;
    }
  }
}
</style>