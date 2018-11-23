<template>
  <div id="app">
    <head-top></head-top>
    <div class="tap">
        <div class="tapItem">
          <router-link to="/food">商品</router-link>
        </div>
        <div class="tapItem">
          <router-link to="/comments">评价</router-link>
        </div>
        <div class="tapItem">
          <router-link to="/shop">商家</router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import headTop from "@/components/headTop/headTop"
  export default {
    name: 'App',
    components:{
      headTop
    }
  }
</script>

<style lang="stylus">
    @import "./common/mixin"
    .tap
      height 40px
      line-height 40px
      display flex
      border-1px(rgba(7,17,27,.1))
      .tapItem
          flex 1
          text-align center
          font-size 14px
          a
            text-decoration none
            &.active
              color rgb(240 20 20)


</style>
