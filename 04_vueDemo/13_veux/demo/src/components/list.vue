<template>
  <div>
    <p v-if="firstView">请输入查询用户</p>
    <p v-if="loading">数据正在加载中......</p>
    <p v-if="errMsg">{{errMsg}}</p>
    <p v-if="emptyMsg">{{emptyMsg}}</p>
    <div class="row" v-if="users.length">
      <div class="card" v-for="user in users">
        <a :href="user['html_url']" target="_blank">
          <img :src="user['avatar_url']" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "list",
        computed:{
          ...mapState(["users","firstView","loading","errMsg","emptyMsg"])
        }
    }
</script>

<style scoped>

</style>
