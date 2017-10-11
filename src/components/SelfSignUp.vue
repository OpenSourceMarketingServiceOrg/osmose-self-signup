<template>
  <div id='signup'>
    <h1>{{title}}</h1>
    <form novalidate v-on:submit.prevent='adduser'>
      First Name: <br>
      <input v-model.lazy.trim='user.fname' placeholder='first name'><br>
      Last Name: <br>
      <input v-model.lazy.trim='user.lname' placeholder='last name'><br>
      Email: <br>
      <input v-model.lazy.trim='user.email' placeholder='email@address.com'> <br>
      <input type='submit' value='Submit'>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import Api from '../mixins/api'
Vue.use(VueResource)

export default {
  name: 'self-signup',
  data: () => ({
    title: ' This is my Title!',
    user: {
      fname: '',
      lname: '',
      email: ''
    }
  }),
  mixins: [Api],
  computed: {
    users () {
      console.log('computed called')
      // return this.$store.state.users.reverse();
    }
  },
  methods: {
    adduser () {
      console.log('user: ', this.user)
      console.log('api: ', Api.post)
      this.$http.post(Api.post, this.user).then(res => {
        console.log('res: ', res)
      },
      err => {
        console.log('err: ', err)
      })
      // return this.$store.commit('addUser', JSON.parse(JSON.stringify(this.user)));
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
