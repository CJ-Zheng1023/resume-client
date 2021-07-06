<template>
  <div :class="['timeline-item', { 'timeline-item--extendable': extendable }]">
    <div class="timeline-item__node"></div>
    <div class="timeline-item__tail"></div>
    <div class="timeline-item__title">
      <span class="timeline-item__extend" v-if="extendable" @click="clickExtendButton">
        <template v-if="extended">-</template>
        <template v-else>+</template>
      </span>
      <slot name="title"></slot>
    </div>
    <div class="timeline-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    extendable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const extended = ref<boolean>(true)
    const clickExtendButton = () => {
      extended.value = extended.value
    }
    return {
      extended,
      ...props,
      clickExtendButton
    }
  }
})
</script>

<style scoped lang="less">
@timelineItem: .timeline-item;
@nodeSize: 12px;
@paddingLeft: 36px;
@tailWidth: 2px;
@{timelineItem}{
  padding: 0 0 20px @paddingLeft;
  position: relative;
  &@{timelineItem}--extendable{
    @extendSize: 12px;
    @{timelineItem}__title{
      position: relative;
      padding-right: 26px;
      @{timelineItem}__extend{
        position: absolute;
        left: 5px;
        top: 50%;
        height: @extendSize;
        width: @extendSize;
        transform: translateY(-50%);
        text-align: center;
      }
    }
  }
  @{timelineItem}__node{
    width: @nodeSize;
    height: @nodeSize;
    border-radius: 50%;
    border: 3px solid @color1;
    position: absolute;
    left: ((@paddingLeft - @nodeSize) / 2);
    top: 0;
  }
  @{timelineItem}__tail{
    height: calc(100% - @nodeSize;);
    position: absolute;
    width: @tailWidth;
    background-color: @color2;
    top: @nodeSize;
    left: ((@paddingLeft - @tailWidth) / 2);
  }
  @{timelineItem}__title{
    color: @color2;
    font-weight: 400;
    font-size: @fontSize3;
  }
  @{timelineItem}__content{
    margin-top: 16px;
    color: @color2;
    font-weight: 300;
    font-size: @fontSize5;
    line-height: 1.4;
  }
}
</style>