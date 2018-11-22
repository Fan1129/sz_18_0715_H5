<template>
  <div id="app">
        <div id="test" v-black></div>
  </div>
</template>

<script>
  import Vue from "vue"
  import myPlugin from "@/MyPlugin";
  Vue.use(myPlugin);
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
