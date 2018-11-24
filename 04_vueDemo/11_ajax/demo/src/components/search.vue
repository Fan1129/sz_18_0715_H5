<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="ajaxBiuBiu">Search</button>
    </div>
  </section>
</template>

<script>
    import PubSub from "pubsub-js"
    export default {
        name: "search",
        data(){
          return{
            searchName:""
          }
        },
        methods:{
          ajaxBiuBiu(){
            PubSub.publish("search",this.searchName)
          }
        }
    }
</script>

<style scoped>

</style>
