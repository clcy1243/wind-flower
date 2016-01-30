<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input type="text" class="form-control" placeholder="Username" v-model="username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" placeholder="Password" v-model="password">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</template>

<script>
import user from '../store/user.js'

export default {

  name: 'LoginView',

  props: {
    username:String,
    password:String
  },

  created () {
    this.username = this.password = null
  },

  methods: {
    submit () {
      // console.log(this)
      if (user.login(this)) {
        alert('success')
      } else {
        alert('faild')
      }
    }
  }
}
</script>