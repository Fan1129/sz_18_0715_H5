<template>
    <div class="container">
      <search></search>
      <list></list>
    </div>
</template>

<script>
  import axios from "axios";
  import search from "@/components/search.vue"
  import list from "@/components/list.vue"
  export default {
    name: 'App',
    data(){
      return {

      }
    },
    components:{
      search,
      list
    }
  }
</script>

<style lang="stylus">

</style>
