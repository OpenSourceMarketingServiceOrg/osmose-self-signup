

<template>
  <div id="app">
    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
    @import './assets/style/index';
    @import './assets/style/settings';

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
