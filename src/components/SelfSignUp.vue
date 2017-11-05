<template>
  
  <div id='signup'>
    <h1 class="h-serif">{{title}}</h1>
    <form novalidate v-on:submit.prevent='adduser' name="self_signup" class="col s12">
      <div class="input-field col s6">
        <input v-model.lazy.trim='user.fname' id="first_name" type="text" class="p-sans">
        <label class="p-sans" for="first_name">First Name</label>
      </div>
      <div class="input-field col s6">
        <input v-model.lazy.trim='user.lname' id="last_name" type="text" class="p-sans">
        <label class="p-sans" for="last_name">Last Name</label>
      </div>
      <div class="input-field col s6">
        <input v-model.lazy.trim='user.email' id="email_address" type="email" name="email" class="validate p-sans">
        <label for="email_address" class="p-sans">Email Address</label>
      </div>
      <button type="submit" value="Submit" class="waves-effect waves-light btn os-btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'OSMOSe Self-Signup',
    user: {
      fname: '',
      lname: '',
      email: ''
    }
  }),
  computed: {
    users () {
      console.log('computed called')
      // return this.$store.state.users.reverse();
    }
  },
  methods: {
    adduser () {
      console.log('user: ', this.user)
      // return this.$store.commit('addUser', JSON.parse(JSON.stringify(this.user)));
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/settings.scss';




</style>
