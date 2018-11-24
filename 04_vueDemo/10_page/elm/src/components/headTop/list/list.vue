<template>
  <div class="list">
    <ul>
      <li v-for="item in listArr">
        <span :class="['icon',obj[item.type]]"></span>
        <span class="text">{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "list",
        data(){
          return{
            listArr:[
              {type:0,text:"在线支付满28减50 满50送老板"},
              {type:1,text:"单人免单"},
              {type:1,text:"汤免费灌"},
              {type:2,text:"特价音频八折"},
              {type:2,text:"双人吃一年"}
            ],
            obj:["decrease","discount","guarantee","invoice","special"]
          }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../../common/mixin.styl"
    .list
      width 75%
      text-align left
      margin-top 24px
      margin-bottom 28px
      margin-right auto
      margin-left auto
      li
        margin-bottom 12px
        &:last-child
          margin-bottom 0px
        .icon
          display inline-block
          width 16px
          height 16px
          background-size 100% 100%
          background-repeat no-repeat
          &.decrease
            bg-image(decrease_2)
          &.discount
            bg-image(discount_2)
          &.guarantee
            bg-image(guarantee_2)
          &.invoice
            bg-image(invoice_2)
          &.special
            bg-image(special_2)
        .text
          font-size 12px
          line-height 12px
          font-weight 200
          color rgb(255,255,255)
</style>
