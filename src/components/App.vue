<template>
  <div id="wrapper" class="container-fluid">
    <div class="row">
      <app-header></app-header>
    </div>
    <div class="row">
      <div class="col-md-2">
        <ul>
          <app-nav v-for="nav in navs"
            :nav="nav"
            :page="nav.page"></app-nav>
        </ul>
      </div>
      <div class="col-md-10">
    <!-- main view -->
        <router-view
          class="view"
          keep-alive
          transition
          transition-mode="out-in">
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppNav from './AppNav.vue'

export default {

  name: 'App',

  components: {
    AppHeader,
    AppNav
  },


  data () {
    var nav = AppNav
    nav.page = 1
    return {
      navs: [
      {page:1},
      {page:2},
      {page:3},
      {page:4}
      ]
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

html, body
  font-family Verdana
  font-size 13px
  height 100%

ul
  list-style-type none
  padding 0
  margin 0

a
  color #000
  cursor pointer
  text-decoration none

#wrapper
  background-color $bg
  position relative
  width 85%
  min-height 80px
  margin 0 auto

.view
  position absolute
  background-color $bg
  width 100%
  transition opacity .2s ease
  box-sizing border-box
  padding 8px 20px
  &.v-enter, &.v-leave
    opacity 0

@media screen and (max-width: 700px)
  html, body
    margin 0
  #wrapper
    width 100%
</style>
