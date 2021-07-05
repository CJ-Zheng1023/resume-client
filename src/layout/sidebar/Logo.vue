<template>
  <div :class="['logo', { 'logo--reactive': !isMd }]">
    <div class="logo__inner flexible flexible--column flexible--center">
      <div class="logo__title">
        <div class="logo__title-main">
          <span class="logo__text logo__text--special">郑</span>
          <span class="logo__text">成杰</span>
        </div>
        <div class="logo__title-sub">
          <span class="logo__text">前端攻城狮</span>
        </div>
      </div>
      <div class="logo__image">
        <div class="figure figure--circle figure--bordered">
          <img class="figure__image" :src="logoImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useIsMd from '@/hooks/useIsMd'
import logoImage from '@/assets/images/logo.jpg'
export default defineComponent({
  setup() {
    return {
      isMd: useIsMd(),
      logoImage
    }
  }
})
</script>

<style scoped lang="less">
@logo: .logo;
@{logo} {
  flex-shrink: 0;
  .flexItem(logo);
  &@{logo}--reactive{
    height: auto;
    flex-shrink: 0;
    min-height: auto;
    padding: 10px 0;
    @{logo}__title{
      display: none;
    }
    @reactiveFigureSize: 50px;
    @{figure}{
      height: @reactiveFigureSize;
      width: @reactiveFigureSize;
      &@{figure}--bordered{
        border-width: 3px;
      }
    }
  }
  @{logo}__inner{
    height: 100%;
  }
  @{logo}__title{
    text-align: center;
    margin-bottom: 26px;
  }
  @{logo}__title-main{
    font-size: @fontSize1;
    margin-bottom: 12px;
  }
  @{logo}__title-sub{
    font-size: @fontSize3;
  }
  @{logo}__text{
    color: @color3;
    &@{logo}__text--special{
      margin-right: 10px;
      color: @color1;
    }
  }
  @{logo}__image{
    text-align: center;
  }
}
@figure: .figure;
@figureSize: 160px;
@{figure} {
  display: inline-block;
  overflow: hidden;
  height: @figureSize;
  width: @figureSize;
  &@{figure}--circle{
    border-radius: 50%;
  }
  &@{figure}--bordered{
    border: 6px solid @color1;
  }
  @{figure}__image{
    height: 100%;
    width: 100%;
  }
}
</style>