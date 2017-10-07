<template>
  <div class="signup">
    <h1>{{title}}</h1>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
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
