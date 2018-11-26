<template>
  <div id="app">
      <p>clicked <span class="count">{{count}}</span> times;this time is <span class="flag">{{flag}}</span></p>
      <button @click="inc({step:1,msg:`msg from app`})">+</button>
      <button @click="dec(-1)">-</button>
      <button @click="incAsync(2)">+(later 2s)</button>
      <p>{{fullName}}</p>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
export default {
  name: 'App',
  computed:{
    ...mapState(["count"]),
    ...mapGetters(["fullName","flag"]),
  },
  methods:{
    ...mapMutations(["inc","dec"]),
    ...mapActions(["incAsync"])
  }
}
</script>

<style>
  .count{
    color: red;
    font-weight: bold;
  }
  .flag{
    color: deeppink;
    font-weight: bold;
  }
</style>
<!-- 1
count(){
return this.$store.state.count
},
fullName(){
return this.$store.getters.fullName
},
flag(){
return this.$store.getters.flag
}
-->

<!--
...mapState({
count:"count",
}),
...mapGetters({
fullName:"fullName",
flag:"flag"
})
-->


<!--
inc(){
this.$store.commit("inc",{step:1,msg:"msg from app"})
},
dec(){
this.$store.commit("dec",-1)
}
-->


<!--
incAsync(step){
this.$store.dispatch("incAsync",step)
}-->
