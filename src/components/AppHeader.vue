<template>
    <!-- header -->
    <div id="head">
      <a id="yc" href="http://www.ycombinator.com">
        <img src="https://news.ycombinator.com/y18.gif">
      </a>
      <h1><a href="#/">蒲公英</a></h1>
      <span class="source">
        Built with <a href="http://vuejs.org" target="_blank">Vue.js</a> |
        <a href="https://github.com/yyx990803/vue-hackernews" target="_blank">Source</a>
      </span>
    </div>
</template>

<style lang="stylus">
@import "../variables.styl"


#head
  background-color #f60
  height 24px
  position relative
  h1
    font-weight bold
    font-size 13px
    display inline-block
    vertical-align middle
    margin 0
  .source
    color #fff
    font-size 11px
    position absolute
    top 4px
    right 4px
    a
      color #fff
      &:hover
        text-decoration underline


#yc
  border 1px solid #fff
  margin 2px
  display inline-block
  vertical-align middle
  img
    vertical-align middle

</style>