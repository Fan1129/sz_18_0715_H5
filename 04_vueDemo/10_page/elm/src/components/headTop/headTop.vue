<template>
    <div class="head">
        <div class="content-wrap">
          <img class="avator" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
          <div class="content">
            <div class="title">
                <span class="brand"></span>
                <span class="name">津味园（尚硅谷）</span>
            </div>
            <div class="desc">
              蜂鸟专送/38分钟到达
            </div>
            <div class="supports">
              <span class="icon guarantee"></span>
              <span class="info">
                在线支付满58减100 满100送店
              </span>
            </div>
          </div>
          <div class="counts">
            <span>5只</span>
            <i class="icon-keyboard_arrow_right"></i>
          </div>
        </div>
        <div class="bulltin-wrap">
          <span class="bulltin"></span>
          <span class="text">
            粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商
          </span>
          <span class="icon-keyboard_arrow_right bulltin_arrow"></span>
        </div>
        <div class="bg"></div>
        <div class="mask">
          <div class="content">
            <div class="main">
                <h2 class="title">津味园（尚硅谷）</h2>
                <div class="stars-wrap" >
                  <stars class="stars-24"></stars>
                </div>
                <info></info>
                <list></list>
                <info>
                  <span class="text">商家公告</span>
                </info>
                <div class="gg">
                  粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商
                </div>
            </div>
          </div>
          <div class="footer">
            <span class="icon-close"></span>
          </div>
        </div>
    </div>
</template>

<script>
  import info from "@/components/headTop/info/info.vue"
  import list from "@/components/headTop/list/list.vue"
  import stars from "@/components/headTop/stars/stars.vue"


  export default {
        name: "headTop",
        components:{
          info,
          list,
          stars
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/mixin.styl"
    .head
      position relative
      background  rgba(7,17,27,0.5)
      overflow hidden
      .content-wrap
        clerfix()
        position relative
        margin-top 24px
        margin-left 24px
        margin-bottom  18px
        .avator
          border-radius 2px
          width 64px
          height 64px
          float left
        .content
          font-size 0px
          margin-left 16px
          float left
          .title
            margin-top 2px
            margin-bottom 8px
            .brand
              margin-right 6px
              vertical-align top
              display inline-block
              width 30px
              height 18px
              bg-image(brand)
              background-size 100% 100%
            .name
              font-size 16px
              color rgb(255,255,255)
              font-weight bold
              line-height 18px
          .desc
            font-size  12px
            color rgb(255,255,255)
            font-weight 200
            line-height 12px
          .supports
            margin-top 10px
            margin-bottom 2px
            .icon
              vertical-align top
              display inline-block
              width 12px
              height 12px
              background-size  100% 100%
              margin-right 4px
              &.decrease
                bg-image(decrease_1)
              &.discount
                bg-image(discount_1)
              &.guarantee
                bg-image(guarantee_1)
              &.invoice
                bg-image(invoice_1)
              &.special
                bg-image(special_1)
            .info
              font-size  10px
              color rgb(255,255,255)
              font-weight 200
              line-height 12px
        .counts
          position absolute
          bottom 0
          right 12px
          width 48px
          height 24px
          line-height 24px
          border-radius 8px
          background-color rgba(0,0,0,0.2)
          font-size 10px
          color rgb(255,255,255)
          font-weight 200
          text-align center

      .bulltin-wrap
        position relative
        background-color rgba(7,17,27,0.2)
        height 28px
        line-height 28px
        padding-left 12px
        padding-right 26px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        color rgb(255,255,255)
        font-weight 200px
        .bulltin
          bg-image(bulletin)
          float left
          vertical-align top
          margin-top 9px
          margin-right 4px
          background-size 100% 100%
          background-repeat: no-repeat
          width 22px
          height 12px
        .text
          font-size 10px
        .bulltin_arrow
          position absolute
          bottom 4px
          right 12px
      .bg
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        filter blur(10px)
        background-image url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg")
        background-size 100% 100%
        z-index -1
      .mask
        position fixed
        left 0
        top 0
        width 100%
        height 100%
        background rgba(7,17,27,.8)
        z-index 99
        overflow auto
        .content
          clearfix()
          min-height 100%
          overflow hidden
          .main
            margin-top 64px
            padding-bottom 96px
            text-align center
            .title
              font-size 16px
              color rgb(255,255,255)
              font-weight 700
              line-height 16px
            .stars-wrap
              height 24px
              margin-top 16px
              margin-bottom 28px
            .gg
              width 80%
              padding 0 12px
              margin 0 auto
              font-size 12px
              font-weight 200
              color rgb(255,255,255)
              line-height 24px
              margin-top 24px
        .footer
          height 96px
          line-height 96px
          text-align center
          margin-top -96px
          font-size 32px
          color rgba(255,255,255,.5)


</style>
