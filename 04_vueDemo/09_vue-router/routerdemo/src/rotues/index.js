import home from "@/components/home";
import about from "@/components/about";

export default  [
  { path: '/about', component: about },
  { path: '/home', component: home },
  { path: '/', redirect: "/about" }

]
