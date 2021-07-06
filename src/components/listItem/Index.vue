<template>
  <div class="list-item">
    <div class="list-item__text">
      <slot></slot>
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
@listItem: .list-item;
@{listItem}{
  position: relative;
  padding-left: 20px;
  &+@{listItem}{
    margin-top: 6px;
  }
  &::before{
    content: "";
    position: absolute;
    left: 0;
    width: 8px;
    height: 16px;
    background-color: @color1;
    top: 2px;
  }
  @{listItem}__text{
    line-height: 1.4;
    color: @color2;
    font-weight: 300;
    font-size: @fontSize5;
  }
}
</style>