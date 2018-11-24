<template>
  <div>
    <p v-if="flag">请输入相应的条件</p>
    <p v-if="isLoaing">数据正在赶来的路上........</p>
    <div class="row">
      <div class="card" v-for="item in users">
        <a :href="item['html_url']" target="_blank">
          <img :src="item['avatar_url']" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import PubSub from "pubsub-js"
    import axios from "axios"
    export default {
        name: "list",
        data(){
          return{
            users:"",
            flag:true,
            isLoaing:false
          }
        },
        mounted(){
          PubSub.subscribe("search",(msg,searchName)=>{
            //跟新提示信息
            this.flag=false;
            this.isLoaing=true;
            this.users=[];


            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url).then((res)=>{
              this.users = res.data.items;
              this.isLoaing=false
            },(error)=>{

            })
          })
        }
    }
</script>

<style scoped>

</style>
