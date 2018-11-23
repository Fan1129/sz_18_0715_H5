<template>
    <p>{{id }}</p>
</template>

<script>
    export default {
      name: "damu",
      props:["id"],
      mounted(){
        console.log(this.$route)
      }
    }

</script>

<style scoped>

</style>
