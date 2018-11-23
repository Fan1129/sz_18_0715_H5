import home from "@/components/home";
import about from "@/components/about";
import damu from "@/components/about";


export default  [
  { path: '/about', component: about },
  { path: '/about/damu', component: damu },
  { path: '/home', component: home },
  { path: '/', redirect: "/about" }

]
