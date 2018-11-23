<template>
    <div>
      <ul>
        <li v-for="(item,index) in messages" :key="item.id">
          <router-link :to="`/home/message/messageDetail/${item.id}`">
            {{item.titile}}
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: "message",
      data() {
        return {
          messages: []
        }
      },
      mounted(){
        setTimeout(()=>{
          this.messages=[
            {id: 1, titile: "message01"},
            {id: 2, titile: "message02"},
            {id: 3, titile: "message03"},
            {id: 4, titile: "message04"},
            {id: 5, titile: "message05"},
            {id: 6, titile: "message06"}
          ]
        },1000)
      }
    }
</script>

<style scoped>

</style>
