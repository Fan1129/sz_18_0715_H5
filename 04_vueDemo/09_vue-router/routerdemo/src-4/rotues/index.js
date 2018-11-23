import home from "@/components/home";
import about from "@/components/about";
import damu from "@/components/damu";
import news from "@/components/home/news";
import message from "@/components/home/message";
import messageDetail from "@/components/home/message/messageDetail"




export default  [
  { path: '/about', component: about },
  {
    path: '/damu/:id',
    component: damu ,
    // props:true
    props(route){
      return {id:route.query.a}
    }
  },
  {
    path: '/home',
    component: home,
    children:[
      {path: 'news', component: news},
      {
        path: 'message',
        component: message,
        children:[
          {
            path: 'messageDetail/:id',
            component: messageDetail,
            props:true
          }
        ]
      },
      {path: '', redirect: "news"}
    ]
  },
  { path: '/', redirect: "/about" }

]
