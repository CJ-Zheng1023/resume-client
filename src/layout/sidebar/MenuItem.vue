<template>
  <div @click="toNav" :class="['menu-item', { 'menu-item--active': isActive }, { 'menu-item--reactive': !isMd }]">
    <div class="menu-item__label">
      <div class="menu-item__text">{{ meta.title }}</div>
    </div>
    <div class="menu-item__icon">
      <Icon>
        <component :is="icon"></component>
      </Icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@vicons/utils'
import { Home, StatsChartSharp } from '@vicons/ionicons5'
import { Timeline24Filled, Building20Filled } from '@vicons/fluent'
import { MenuIconEnum } from '@/enums/MenuIconEnum'
import { useRouter } from 'vue-router'
import useIsMd from '@/hooks/useIsMd'
export default defineComponent({
  components: {
    [MenuIconEnum.HOME]: Home,
    [MenuIconEnum.COMPANY]: Building20Filled,
    [MenuIconEnum.PROJECT]: Timeline24Filled,
    [MenuIconEnum.SKILL]: StatsChartSharp,
    Icon
  },
  props: {
    menuItem: {
      type: Object,
      default: () => {}
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['active'],
  setup(props, { emit }) {
    const router = useRouter()
    const toNav = () => {
      emit('active', props.menuItem.icon)
      router.push(props.menuItem.path)
    }
    return {
      isMd: useIsMd(),
      ...props.menuItem,
      toNav
    }
  }
})
</script>

<style scoped lang="less">
@menuItem: .menu-item;
@menuItemBoderstyle: 1px solid #e4c02e;
@labelAndIconGapSize: 20px;
@{menuItem}{
  cursor: pointer;
  padding: 12px @labelAndIconGapSize;
  display: flex;
  align-items: center;
  border-top: @menuItemBoderstyle;
  overflow: hidden;
  position: relative;
  &::after{
    z-index: 1;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    width: 0;
    transition: width .4s
  }
  &@{menuItem}--reactive{
    justify-content: center;
    @{menuItem}__label{
      display: none;
    }
    @{menuItem}__icon{
      margin-left: 0;
    }
  }
  &@{menuItem}--active{
    &::after{
      width: 100%;
      background-color: @color2;
    }
    @{menuItem}__label{
      border-right-color: transparent;
      &::after{
        top: 0;
      }
    }
    @{menuItem}__text{
      color: @color1;
    }
    @{menuItem}__icon{
      color: @color1;
    }
  }
  &:last-child{
    border-bottom: @menuItemBoderstyle;
  }
  @{menuItem}__label{
    @borderWidth: 1px;
    position: relative;
    z-index: 2;
    flex-grow: 1;
    border-right: @borderWidth solid #e4c133;
    &::after{
      width: @borderWidth;
      height: 100%;
      position: absolute;
      content: "";
      right: -@borderWidth;
      top: -100%;
      transition: top .6s;
      background-color: @color1;
    }
  }
  @{menuItem}__text{
    text-align: right;
    color: @color2;
    font-size: @fontSize3;
    font-weight: 800;
    margin-right: @labelAndIconGapSize;
    line-height: 1.5;
  }
  @{menuItem}__icon{
    position: relative;
    z-index: 2;
    margin-left: @labelAndIconGapSize;
    flex-shrink: 0;
    color: @color2;
    font-size: @fontSize3;
    line-height: 1;
    margin-bottom: -4px;
  }
}
</style>