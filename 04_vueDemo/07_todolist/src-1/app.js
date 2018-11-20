import Vue from "vue";
import test from "./components/test.vue";

new Vue({
    el:"#app",
    template:`<div><p>{{msg}}</p> <test></test></div>`,
    data:{
        msg:"hello webpack"
    },
    components:{
        test
    }
})