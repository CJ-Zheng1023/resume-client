<template>
  <div class="header">
    <div class="header__tools"></div>
    <div class="header__content">
      <span class="header__text header__text--special">欢迎</span>
      <span class="header__text">查阅本人简历</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
@header: .header;
@{header} {
  .flexItem(header);
  padding: 10px @mainBoxPaddingLeftAndRight;
  @{header}__tools{
    color: aqua;
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
</style>