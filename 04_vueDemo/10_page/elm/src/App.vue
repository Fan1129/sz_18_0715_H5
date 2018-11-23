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
    .tap
      display flex
      background pink
      .tapItem
          flex 1
          text-align center
</style>
