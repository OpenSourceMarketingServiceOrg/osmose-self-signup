import SelfSignUp from './SelfSignUp.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('om-self-signup', SelfSignUp);
  }
};
