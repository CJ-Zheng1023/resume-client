<template>
  <div :class="['menubox', { 'menubox--reactive': !isMd }]">
    <div class="menubox__inner flexible flexible--column">
      <div class="menubox__menu">
        <n-scrollbar style="height: 100%;">
          <div class="menu">
            <menu-item @active="handleActive" v-for="item in commonRoutes" :isActive="icon === item.meta.icon"
              :key="item.name" :menuItem="item"></menu-item>
          </div>
        </n-scrollbar>
      </div>
      <div :class="['menubox__link', { 'menubox__link--active': !isMd && toggleClicked }]">
        <div class="toggle" @click="clickToggle">
          <div class="icon">
            <Icon>
              <EllipsisHorizontal />
            </Icon>
          </div>
        </div>
        <div class="wrapper">
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
              <a href="https://work-gallery.vercel.app/" target="_blank">
                <Icon>
                  <Toolbox16Regular />
                </Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, computed } from 'vue'
import useIsMd from '@/hooks/useIsMd'
import { commonRoutes } from '@/router/config'
import MenuItem from './MenuItem.vue'
import { Icon } from '@vicons/utils'
import {
  LogoVue,
  LogoGithub,
  Link,
  EllipsisHorizontal
} from '@vicons/ionicons5'
import { Layout } from '@vicons/carbon'
import { Toolbox16Regular } from '@vicons/fluent'
import { IMeta } from './types'
import { deactivateLinkNav } from '@/hooks/useWindowClick'
import { useRoute } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { NScrollbar } from 'naive-ui'
import { state } from '../../store/modules/app/state';
export default defineComponent({
  components: {
    MenuItem,
    Icon,
    LogoVue,
    LogoGithub,
    Link,
    Layout,
    Toolbox16Regular,
    EllipsisHorizontal,
    NScrollbar
  },
  setup() {
    const route = useRoute()
    const currentMenu = reactive<IMeta>(route.meta as unknown as IMeta)
    const handleActive = (meta: IMeta) => {
      Object.assign(currentMenu, meta)
    }
    const toggleClicked = ref<boolean>(false)
    const clickToggle = () => {
      toggleClicked.value = true
    }
    const title = computed(() => currentMenu.title)
    useTitle(title)
    deactivateLinkNav(toggleClicked)
    return {
      isMd: useIsMd(),
      ...toRefs(currentMenu),
      commonRoutes,
      handleActive,
      toggleClicked,
      clickToggle
    }
  }
})
</script>

<style scoped lang="less">
@menuBox: .menubox;

@{menuBox} {
  .flexItem(menu);

  &@{menuBox}--reactive {
    height: auto;
    flex-grow: 1;

    @{menuBox}__link {
      position: relative;

      &@{menuBox}__link--active {
        .wrapper {
          opacity: 1;
          transform: scaleX(1);
        }

        .toggle {
          &::after {
            width: 100%;
          }

          .icon {
            color: @color1;
          }
        }
      }

      .toggle {
        position: relative;
        display: block;
        text-align: center;
        cursor: pointer;
        padding: @linkTopAndBottomPadding 0;

        &::after {
          z-index: 1;
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 0;
          background-color: @color2;
          transition: width .4s;
        }

        .icon {
          display: inline-block;
          position: relative;
          z-index: 2;
          padding: 4px;
          border-radius: 4px;
          font-size: @fontSize3;
          color: @color2;
          .fixicon();
        }
      }

      .wrapper {
        z-index: 2;
        transition: transform .4s, opacity .4s;
        transform: scaleX(0);
        transform-origin: 0%;
        position: absolute;
        left: 100%;
        top: 0;
        opacity: 0;

        @{link} {
          background-color: @color2;
        }

        @{linkItem} {
          margin: 0 6px;

          &:hover {
            background-color: @color1;

            a {
              color: @color2;
            }
          }

          a {
            color: @color1;
          }
        }
      }
    }
  }

  @{menuBox}__inner {
    height: 100%;
    padding: 10px 0;
  }

  @{menuBox}__menu {
    flex-grow: 1;
    height: 0;
  }

  @{menuBox}__link {
    flex-shrink: 0;

    .toggle {
      display: none;
    }
  }
}

@menu: .menu;

@{menu} {
  height: 100%;
  overflow-y: auto;
}

@link: .link;
@linkTopAndBottomPadding: 10px;

@{link} {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: @linkTopAndBottomPadding 30px;
}

@linkItem: .link-item;

@{linkItem} {
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: @color2;

    a {
      color: @color1;
    }
  }

  a {
    font-size: @fontSize3;
    color: @color2;
    line-height: 1;
    .fixicon();
  }
}
</style>