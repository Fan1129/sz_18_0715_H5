<template>
   <ul>
     <li v-for="(item,index) in newslist" :key="item">
       {{item}}
     </li>
   </ul>
</template>

<script>
    export default {
      name: "news",
      data(){
        return {
          newslist:["news01","news02","news03"]
        }
      }
    }
</script>

<style scoped>

</style>
