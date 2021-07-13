<template>
  <div :class="['timeline-item', { 'timeline-item--extendable': extendable }]">
    <div class="timeline-item__node"></div>
    <div class="timeline-item__tail"></div>
    <div class="timeline-item__title">
      <slot name="title"></slot>
      <span class="timeline-item__extender" v-if="extendable" @click="clickExtendButton">
        <template v-if="extended">-</template>
        <template v-else>+</template>
      </span>
    </div>
    <div :class="['timeline-item__content', { 'timeline-item__content--show': extended }]">
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
  setup() {
    const extended = ref<boolean>(true)
    const clickExtendButton = () => {
      extended.value = !extended.value
    }
    return {
      extended,
      clickExtendButton
    }
  }
})
</script>

<style scoped lang="less">
@timelineItem: .timeline-item;
@nodeSize: 20px;
@paddingLeft: 36px;
@tailWidth: 2px;
@{timelineItem}{
  padding: 0 0 20px @paddingLeft;
  position: relative;
  &@{timelineItem}--extendable{
    @extendSize: 12px;
    @{timelineItem}__title{
      position: relative;
      padding-left: 20px;
      @{timelineItem}__extender{
        background-color: @color2;
        color: @color3;
        cursor: pointer;
        border-radius: 50%;
        line-height: @extendSize;
        position: absolute;
        left: 4px;
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
    display: none;
    &@{timelineItem}__content--show{
      display: block;
    }
  }
}
</style>