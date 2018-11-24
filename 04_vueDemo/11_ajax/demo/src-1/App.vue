<template>
  <div id="app">
    <p v-if="!repoName">loading</p>
    <p v-else>最流行的库是 <a :href="repoUrl">{{repoName}}</a> </p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        repoUrl:"",
        repoName:""
      }
    },
    mounted(){
        const url = "https://api.github.com/search/repositories?q=j&sort=stars&order=desc"
        this.$http.get(url).then((response)=>{
            const data = response.data;
            this.repoUrl= data.items[0]["html_url"];
            this.repoName = data.items[0].name;
        }).catch((err)=>{
            console.log(err)
        })
    }
  }
</script>

<style lang="stylus">

</style>
