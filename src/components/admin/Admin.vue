<template>
  <div id="wrapper" class="container-fluid">
    <div class="row">
      <admin-header></admin-header>
    </div>
    <div class="row">
      <div class="col-md-2">
        <ul class="nav nav-pills nav-stacked">
          <admin-nav v-for="nav in navs"
            :nav="nav"
            :page="nav.page"></admin-nav>
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
import AdminHeader from './AdminHeader.vue'
import AdminNav from './AdminNav.vue'

export default {

  name: 'Admin',

  components: {
    AdminHeader,
    AdminNav
  },


  data () {
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