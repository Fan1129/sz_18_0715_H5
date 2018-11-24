<template>
  <div id="app">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data(){
      return{
        list:["1"],
        loading:false
      }
    },
    methods:{
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 1000);
      }
    }
  }
</script>

<style>
img{
  width: 100px;
  height: 100px;
}
</style>
