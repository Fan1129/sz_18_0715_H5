import VueRouter from "vue-router";
import routes from "@/rotues"
const router = new VueRouter({
  routes ,// (缩写) 相当于 routes: routes
  // linkActiveClass:"active",
  linkExactActiveClass:"active"
})

export default router
