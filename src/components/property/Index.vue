<template>
  <div class="property">
    <div class="property__label" :style="{ width: `${width}px`}">{{ label }}</div>
    <div class="property__content">{{ content }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      require: true
    },
    content: {
      type: String,
      require: true
    },
    width: {
      type: Number,
      default: 100
    }
  },
  setup(props) {
    return {
      ...props
    }
  }
})
</script>

<style scoped lang="less">
@property: .property;
@padding: 8px 12px;
@{property}{
  .clearfix();
  font-size: @fontSize5;
  &+@{property}{
    margin-top: 10px;
  }
  @{property}__label{
    text-align: left;
    padding: @padding;
    color: @color2;
    float: left;
    background-color: @color1;
  }
  @{property}__content{
    margin-left: 16px;
    float: left;
    padding: @padding;
    color: @color3;
    background-color: @color2;
  }
}
</style>