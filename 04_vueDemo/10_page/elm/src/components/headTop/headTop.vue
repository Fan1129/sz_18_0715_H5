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
        </div>
        <div class="bulltin-wrap"></div>
    </div>
</template>

<script>
    export default {
        name: "headTop"
    }
</script>

<style scoped lang="stylus">
    @import "../../common/mixin.styl"
    .head
      background  rgba(7,17,27,0.5)
      overflow hidden
      .content-wrap
        clerfix()
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
</style>
