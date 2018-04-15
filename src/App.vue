

<template>
  <div id="app">
    <div class="container">
        <osmose-self-signup v-bind:image="image" v-bind:title="title" v-bind:api="api" v-bind:options="options"></osmose-self-signup>
    </div>
  </div>
</template>

<script>
import osmoseSelfSignup from '@/components/SelfSignUp';

export default {
  name: 'app',
  data: () => ({
    image: {
      url: require('@/assets/osmose.png'),
      alt: 'Logo',
      height: '250',
      width: '250'
    },
    options: { // One or none. Don't do both!
      collect_firstlast: false,
      collect_fullname: true
    },
    title: 'OSMOSe Self-Signup',
    api: {
      post: 'https://zsazrlvshe.execute-api.us-east-1.amazonaws.com/dev1/list'
    }
  }),
  components: {
    osmoseSelfSignup
  }
};
</script>

<style lang="scss">
    @import './assets/styles/index';
    @import './assets/styles/settings';

    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }

  .cls-1 {
      fill: none;
  }
  .cls-2 {
      fill: rgba($hr, $hg, $hb, 1.0);
  }
  .cls-3 {
      fill: rgba($hr, $hg, $hb, 0.25);
  }
  .cls-4 {
      fill: rgba($hr, $hg, $hb, 0.5);
  }
  .cls-5 {
      fill: rgba($hr, $hg, $hb, 0.75);
  }
</style>
