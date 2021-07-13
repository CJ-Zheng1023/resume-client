<template>
  <div :class="['tag', `tag--${type}`]">
    <div class="tag__text">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TagTypeEnum } from './types'
export default defineComponent({
  props: {
    type: {
      type: Object as PropType<TagTypeEnum>,
      default: () => TagTypeEnum.DARK
    }
  },
  setup() {}
})
</script>

<style scoped lang="less">
@tag: .tag;
@{tag}{
  padding: 4px 6px;
  display: inline-block;
  font-style: italic;
  font-weight: 300;
  &@{tag}--dark{
    color: @color3;
    background-color: @color2;
  }
  &@{tag}--light{
    color: @color2;
    background-color: @color1;
  }
  @{tag}__text{
    font-size: @fontSize5;
  }
}
</style>