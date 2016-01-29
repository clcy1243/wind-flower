<template>
<li><a :href="href">{{page}}</a></li>
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
      return '#/news/' + this.nav.page
    }
  }
}
</script>