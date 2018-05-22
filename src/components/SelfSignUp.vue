<template>
  <div id='signup'>
    <img v-if="image.url" :src="image.url" :alt="image.alt" :height="image.height" :width="image.width" />
    <h1 class="h-serif">{{title}}</h1>

    <div class="row">
      <form name="form" novalidate v-on:submit.prevent="addSubscriber">

        <div class="input-field col s12" v-if="options.collect_fullname">
          <i class="material-icons prefix">account_circle</i>
          <input v-model.lazy.trim='user.fullname' autocomplete="name" name="full_name" id="full_name" type="text" class="p-sans" v-bind:disabled="shouldDisable">
          <label class="p-sans" for="full_name">Full Name</label>
        </div>

        <div class="input-field col s12" v-if="options.collect_firstlast">
          <i class="material-icons prefix">account_circle</i>
          <input v-model.lazy.trim='user.fname' autocomplete="given-name" name="first_name" id="first_name" type="text" class="p-sans" v-bind:disabled="shouldDisable">
          <label class="p-sans" for="first_name">First Name</label>
        </div>

        <div class="input-field col s12" v-if="options.collect_firstlast">
          <i class="material-icons prefix">account_circle</i>
          <input v-model.lazy.trim='user.lname' autocomplete="family-name" name="last_name" id="last_name" type="text" class="p-sans" v-bind:disabled="shouldDisable">
          <label class="p-sans" for="last_name">Last Name</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input required v-model.lazy.trim='user.email' autocomplete="email" name="email_address" id="email_address" type="email" class="validate p-sans" v-bind:disabled="shouldDisable">
          <label for="email_address" class="p-sans">Email Address</label>
        </div>

        <div class="col s12">
          <button type="submit" v-bind:disabled="(shouldDisable || !isEmail(user.email))" value="Submit" class="btn btn-success waves-effect waves-light ">Submit</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import Materialize from 'materialize-css/dist/js/materialize.min.js';

export default {
  data: () => ({
    form: {},
    shouldDisable: false,
    user: {
      fullname: null,
      fname: null,
      lname: null,
      email: null
    }
  }),
  components: {
    Materialize
  },
  props: ['image', 'title', 'api', 'options'],
  methods: {
    addSubscriber () {
      this.$http.post(this.api.post, this.user)
        .then((res) => {
          let successMsg = `<div class="toaster"><i class="material-icons" style="margin-right:8px;">check</i><span>Sign Up Success!</span></div>`;
          this.clearIt(successMsg, 'green');
        }).catch((err) => {
          console.error(err);
          let errorMsg = `<div class="toaster"><i class="material-icons" style="margin-right:8px;">error</i><span>Error Signing Up</span></div>`;
          this.clearIt(errorMsg, 'red');
        });
    },
    clearIt (msg, msgClass) {
      Materialize.toast(msg, 10000, msgClass);
      this.user = {
        fullname: null,
        fname: null,
        lname: null,
        email: null
      };
      this.shouldDisable = true;
    },
    botKilla () { // This will be implemented later.
      this.$http.post('https://www.google.com/recaptcha/api/siteverify', this.user)
        .then((res) => {
          Materialize.toast(`<div class="toaster"><i class="material-icons" style="margin-right:8px;">check</i><span>Sign Up Success!</span></div>`, 10000, 'green');
        }).catch((err) => {
          console.error(err);
          Materialize.toast(`<div class="toaster"><i class="material-icons" style="margin-right:8px;">error</i><span>Error Signing Up</span></div>`, 10000, 'red');
        });
    },
    isEmail (email) {
      // eslint-disable-next-line
      let ePattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return ePattern.test(email);
    }
  }
};
</script>

<style lang="scss">
  @import '../assets/styles/settings.scss';

  .brand-logo {
    width: 20vw;
    height: auto;
  }

  #toast-container {
    bottom: auto !important;
    left: auto !important;
    right: auto !important;
    top: 10%;
    width: 30%;
    margin: auto;
    margin-left: 35%;
    .toaster {
      width: 100%;
      text-align: center;
      i.material-icons, span {
        vertical-align: middle;
        padding: 0px 10px;
      }
    }
  }

</style>
