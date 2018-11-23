<template>
    <ul>
      <li v-for="(val,key) in messageDetail" :key="key">
        {{key}}:{{val}}
      </li>
    </ul>
</template>

<script>
    const data =[
      {id:1,titile:"message01",text:"text ---> message01 <---- text"},
      {id:2,titile:"message02",text:"text ---> message02 <---- text"},
      {id:3,titile:"message03",text:"text ---> message03 <---- text"},
      {id:4,titile:"message04",text:"text ---> message04 <---- text"},
      {id:5,titile:"message05",text:"text ---> message05 <---- text"},
      {id:6,titile:"message06",text:"text ---> message06 <---- text"},
    ]
    export default {
       name: "messageDetail",
       props:["id"],
        data(){
          return {
            messageDetails:[]
          }
        },
        computed:{
          messageDetail(){
            return this.messageDetails[this.id-1];
          }
        },
        mounted(){
         console.log("messageDetai");
         setTimeout(()=>{
           this.messageDetails = data
         },1000)
        }
    }
</script>

<style scoped>

</style>
