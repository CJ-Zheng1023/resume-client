<template>
  <div class="progress">
    <div class="progress__rail">
      <div class="progress__fill" :style="{ width: value + '%' }">
        <div class="progress__text">{{ value }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: Number,
      default: 0
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
@progress: .progress;
@progressHeight: 20px;
@{progress}{
  width: 100%;
  height: @progressHeight;
  @{progress}__rail{
    height: 100%;
    width: 100%;
    background-color: rgb(235, 235, 235);
    border-top-left-radius: (@progressHeight / 2);
    border-top-right-radius: (@progressHeight / 2);
    border-bottom-left-radius: (@progressHeight / 2);
    border-bottom-right-radius: (@progressHeight / 2);
  }
  @{progress}__fill{
    border-top-left-radius: (@progressHeight / 2);
    border-bottom-left-radius: (@progressHeight / 2);
    background-color: @color1;
    background-repeat: repeat;
    background-size: 40px 40px;
    animation: progress-stripes 2s linear infinite;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent 100%);
  }
  @{progress}__text{
    padding: 0 20px;
    line-height: @progressHeight;
    font-size: @fontSize5;
    color: @color2;
    text-align: right;
  }
}
@keyframes progress-stripes{
  0%{
    background-position: 40px 0;
  }
  100%{
    background-position: 0 0;
  }
}
</style>