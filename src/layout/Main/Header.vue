<template>
  <div class="header">
    <div class="header__tools">
      <div class="tool-item skin" @click="clickSkin">
        <icon>
          <SkinOutlined />
        </icon>
      </div>
    </div>
    <div class="header__content">
      <span class="header__text header__text--special">欢迎</span>
      <span class="header__text">查阅本人简历</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@vicons/utils'
import { SkinOutlined } from '@vicons/antd'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    Icon,
    SkinOutlined
  },
  setup() {
    const store = useStore()
    const clickSkin = () => {
      store.dispatch('app/setDrawerOpened', true)
    }
    return {
      clickSkin
    }
  }
})
</script>

<style scoped lang="less">
@header: .header;
@{header} {
  .flexItem(header);
  padding: 10px @mainBoxPaddingLeftAndRight;
  @{header}__tools{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @{header}__content{
    padding-top: 80px;
    font-weight: 700;
    word-break: break-all;
    word-wrap: break-word;
  }
  @{header}__text{
    font-size: @fontSize2;
    color: @color3;
    &@{header}__text--special{
      color: @color1;
    }
  }
}
@toolItem: .tool-item;
@{toolItem}{
  padding: 2px;
  border-radius: 3px;
  color: @color1;
  font-size: @fontSize3;
  cursor: pointer;
  .fixicon();
  &+@{toolItem}{
    margin-left: 10px;
  }
  &:hover{
    background-color: @color1;
    color: @color2;
  }
}
</style>