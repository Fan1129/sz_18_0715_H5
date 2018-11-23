<template>
  <div id="app">
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header"><h2>Router Basic - 01</h2></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <router-link to="/about" class="list-group-item">About</router-link>
            <router-link to="/home" class="list-group-item">Home</router-link>
            <router-link to="/damu/123123123?a=12131&b=2" class="list-group-item" >damu</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>
