<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.lazy="searchName"/>
      <button @click="Search">Search</button>
    </div>
  </section>
</template>

<script>
    export default {
        name: "search",
        computed:{
          searchName:{
            get(){
              return this.$store.state.searchName
            },
            set(val){
              this.$store.commit("searchName",val)
            }
          }
        },
        methods:{
          Search(){
            //触发一个action
            this.$store.dispatch("Search")
          }
        }
    }
</script>

<style scoped>

</style>
