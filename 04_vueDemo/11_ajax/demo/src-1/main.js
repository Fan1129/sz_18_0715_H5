// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from "vue-resource"

Vue.config.productionTip = false
Vue.use(vueResource) // 相当于给所有的vue实例加上了$http方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
