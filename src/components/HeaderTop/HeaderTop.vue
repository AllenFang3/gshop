<template>
     <header class="header">
          <slot name="left"></slot>
          <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>
          <slot name="right"></slot>
        </header>
</template>

<script>
export default {
    props:{
        title:String
    }
    
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
     height 45px
            .header_search
              position absolute
              left 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-sousuo
                font-size 25px
                color #fff
           
            .header_login
              font-size 14px
              color #fff
              position absolute
              right 15px
              top 50%
              transform translateY(-50%)
              .header_login_text
                color #fff
 
</style>


