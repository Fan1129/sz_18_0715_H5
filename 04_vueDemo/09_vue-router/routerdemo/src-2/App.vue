<template>
  <div id="app">
    <router-link to="/about">Go to about</router-link>
    <router-link to="/home">Go to home</router-link>
    <!--<a href="/#/about">about</a>
    <a href="/#/home">home</a>-->

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #test{
    width: 100px;
    height: 100px;
  }
</style>
