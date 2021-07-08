<template>
  <div :class="['drawer', { 'drawer--opened': drawerOpened }]">
    <div class="drawer__inner">
      <div class="drawer__section">
        <div class="section">
          <div class="section__header">请选择主题</div>
          <div class="section__body">
            <div class="palette-wrapper">
              <div @click="clickPalette(item.colors, index)" :class="['palette', { 'palette--active': item.active }]" v-for="(item, index) in palettes" :key="index">
                <div class="palette__box">
                  <div class="palette__item" :style="{ 'background-color': color }" v-for="(color, index) in item.colors" :key="index"></div>
                </div>
                <div class="palette__caption">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useEventListener } from '@vueuse/core'
import { cacheKey } from '@/config'
import { storage } from '@/utils/storage'
import { makeUp } from '@/plugins/makeUp'
export default defineComponent({
  setup() {
    const store = useStore()
    function deactivate(e: Event) {
      if (document.querySelector('.drawer')?.contains(e.target as Node)) {
        return
      }
      if (document.querySelector('.skin')?.contains(e.target as Node)) {
        return
      }
      store.dispatch('app/setDrawerOpened', false)
    }
    useEventListener('click', deactivate)
    const palettes = reactive<Array<Record<string, any>>>([
      {
        colors: ['#f4d03e', '#111', '#fff'],
        name: '玫瑰金',
        active: false
      },
      {
        colors: ['blue', 'red', '#fff'],
        name: '玫瑰金',
        active: false
      },
      {
        colors: ['green', 'pink', '#fff'],
        name: '玫瑰金',
        active: false
      }
    ])
    const index = ~~storage.get(cacheKey.skinIndex) ?? 0
    palettes[index]['active'] = true
    const clickPalette = (colors: Array<string>, index: number) => {
      storage.set(cacheKey.skinIndex, index)
      palettes.forEach(p => (p.active = false))
      palettes[index]['active'] = true
      const [color1, color2, color3] = colors
      const vars = {
        '--color1': color1,
        '--color2': color2,
        '--color3': color3
      }
      makeUp(vars)
      storage.set(cacheKey.skin, vars)
    }
    return {
      drawerOpened: computed(() => store.getters['app/drawerOpened']),
      palettes,
      clickPalette
    }
  }
})
</script>

<style scoped lang="less">
@drawer: .drawer;
@width: 300px;
@{drawer}{
  position: fixed;
  right: -@width;
  top: 0;
  bottom: 0;
  box-shadow: 1px 1px 3px 0 #333;
  transition: right .4s;
  width: @width;
  &@{drawer}--opened{
    right: 0;
  }
  @{drawer}__inner{
    height: 100%;
    overflow-y: auto;
    background-color: #fff;
    padding: 16px 20px;
  }
  @{drawer}__section{
    &+@{drawer}__section{
      margin-top: 16px;
    }
  }
}
@section: .section;
@{section}{
  @paddingLeftAndRight: 12px;
  @{section}__header{
    padding: 16px @paddingLeftAndRight;
    line-height: 1.4;
    font-size: @fontSize3;
    color: #222;
    border-bottom: 1px solid #666;
  }
  @{section}__body{
    padding: 14px @paddingLeftAndRight;
  }
}
.palette-wrapper{
  padding: 0 30px;
}
@palette: .palette;
@{palette}{
  cursor: pointer;
  @activeColor: rgb(48, 81, 226);
  &+@{palette}{
    margin-top: 20px;
  }
  &@{palette}--active{
    @{palette}__box{
      border-color: @activeColor;
    }
    @{palette}__caption{
      color: @activeColor;
    }
  }
  @{palette}__box{
    padding: 1px;
    border: 1px solid #777;
    border-radius: 4px;
    height: 80px;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
  }
  @{palette}__item{
    width: 33.33333%;
  }
  @{palette}__caption{
    text-align: center;
    margin-top: 10px;
    font-size: @fontSize4;
    color: #666;
  }
}
</style>