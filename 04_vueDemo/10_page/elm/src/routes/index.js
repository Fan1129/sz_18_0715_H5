import comments from "@/page/comments/comments.vue"
import food from "@/page/food/food.vue"
import shop from "@/page/shop/shop.vue"

export default [
  {path:"/comments",component:comments},
  {path:"/food",component:food},
  {path:"/shop",component:shop},
  {path:"/",redirect:"/food"},

]
