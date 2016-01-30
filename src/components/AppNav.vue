<template>
<!-- 利用 v-link 属性实现导航的激活类控制 -->
<li role="presentation" v-link="{ path: href, activeClass: 'active' }"><a v-link="href">{{page}}</a></li>
</template>


<script>
export default {

  name: 'Nav',

  props: {
    nav: Object,
    page: Number
  },

  computed: {
    href () {
      return '/news/' + this.nav.page
    }
  }
}
</script>