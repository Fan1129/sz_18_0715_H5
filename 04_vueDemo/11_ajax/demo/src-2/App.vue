<template>
  <div id="app">
    <p v-if="!repoName">loading</p>
    <p v-else>最流行的库是 <a :href="repoUrl">{{repoName}}</a> </p>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'App',
    data(){
      return {
        repoUrl:"",
        repoName:""
      }
    },
    mounted(){
        const me = this;
        const url = "https://api.github.com/search/repositories?q=j&sort=stars&order=desc"
        axios.get(url)
          .then(function (response) {
            const data = response.data;
            me.repoUrl= data.items[0]["html_url"];
            me.repoName = data.items[0].name;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
</script>

<style lang="stylus">

</style>
