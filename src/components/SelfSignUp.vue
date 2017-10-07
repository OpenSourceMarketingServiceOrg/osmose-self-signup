<template>
  <div class="signup">
    <h1>{{title}}</h1>
    <form>
      First Name: <br>
      <input v-model="fname" placeholder="first name"><br>
      Last Name: <br>
      <input v-model="lname" placeholder="last name"><br>
      Email: <br>
      <input v-model="email" placeholder="email@address.com"> <br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SelfSignUp',
  data () {
    return {
      title: 'This is my title'
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
