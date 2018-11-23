<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div msg="atguigu"><h2>home组件</h2>
          <div>
            <ul class="nav nav-tabs">
              <li>
                <router-link to="/home/news">News</router-link>
              </li>
              <li>
                <router-link to="/home/message">Message</router-link>
              </li>
            </ul>

            <router-view></router-view>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    mounted(){
      console.log("home")
    }
  }
</script>

<style scoped>

</style>
