<template>
    <div class="stars">
      <span class="star on"></span>
      <span class="star on"></span>
      <span class="star half"></span>
      <span class="star half"></span>
      <span class="star off"></span>
    </div>
</template>

<script>
    export default {
        name: "stars"
    }
</script>

<style scoped lang="stylus">
  @import "../../../common/mixin.styl"
  .stars
    .star
        display inline-block
        background-size 100% 100%
        background-repeat no-repeat
    &.stars-48
      .star
        width 20px
        height 20px
        margin-right  20px
        &:last-child
          margin-right 0px
        &.on
          bg-image(star48_on)
        &.half
          bg-image(star48_half)
        &.off
          bg-image(star48_off)
    &.stars-36
      .star
        width 15px
        height 15px
        margin-right  15px
        &:last-child
          margin-right 0px
        &.on
          bg-image(star36_on)
        &.half
          bg-image(star36_half)
        &.off
          bg-image(star36_off)
    &.stars-24
      .star
        width 10px
        height 10px
        margin-right  10px
        &:last-child
          margin-right 0px
        &.on
          bg-image(star24_on)
        &.half
          bg-image(star24_half)
        &.off
          bg-image(star24_off)

</style>
