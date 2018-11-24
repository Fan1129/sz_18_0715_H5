<template>
  <div class="info">
    <span class="line"></span>
    <slot>
      <span class="text">优惠信息</span>
    </slot>
    <span class="line"></span>
  </div>
</template>

<script>
    export default {
        name: "info"
    }
</script>

<style scoped lang="stylus">
  .info
    display flex
    margin 0 auto
    width 80%
    color rgb(255,255,255)
    align-items center
    .line
      flex 1
      height 1px
      background rgb(255,255,255)
    .text
      font-weight 700
      margin 0 12px
</style>
