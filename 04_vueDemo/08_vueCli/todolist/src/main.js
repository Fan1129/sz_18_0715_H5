import Vue from 'vue'
import app from './components/app.vue'

// Vue.prototype.bus=new Vue();
new Vue({
  el: '#app',
  template: `<app></app>`,
  components: {
    app
  }
})
