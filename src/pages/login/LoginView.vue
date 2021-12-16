<template>
  <q-page class="bg-light-green-1" padding>
    <div class="full-width column">
      <q-form
        @submit="initialVerification"
        @reset="resetLoginForm"
      >
        <q-card class="login-card login-card-position column">
          <q-card-section class="row">
            <div class="text-center text-h6 col-4">Login</div>
            <q-space/>
            <div>
              <q-btn icon-right="info" color="red-2" flat>
                <q-tooltip class="info-tooltip" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                  Help
                </q-tooltip>
                <q-menu auto-close>
                  <q-list style="min-width: 100px">
                    <q-item clickable v-ripple>
                      <q-item-section>Forgot Password</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Request account</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section>
            <q-input class="q-my-md" label="Email Address" v-model="emailAddress" outlined lazy-rules
                     :rules="[ val => val && val.length > 0 || 'Please provide an email address',
                             val => isEmailAddressValid(val) || 'Please enter a valid email address']"
                     :disable="disabled"/>
            <q-input class="q-my-md" label="Password" v-model="password" outlined lazy-rules
                     :rules="[ val => val && val.length > 0 || 'Please provide a password']" :disable="disabled"
                     :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-space/>
          <q-card-actions class="q-ma-sm" align="center">
            <q-btn label="Clear" type="reset" flat color="primary" :disable="disabled"/>
            <q-btn label="Login" type="submit" unelevated color="primary" :disable="disabled"/>
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-page>
</template>
<script>
import {useQuasar} from 'quasar'
import {useStore} from 'vuex';
import {mapGetters, mapActions} from "vuex";
import {showErrorMessage} from 'src/functions/alert-message';

export default {
  name: 'LoginView',
  setup()
  {
    const $q = useQuasar();
  },
  data()
  {
    return {
      emailAddress: "",
      password: "",
      incorrectLoginCount: 0,
      incorrectLoginThreshHold: 5,
      disabled: false,
      isPwd: true
    }
  },
  methods: {
    ...mapActions('auth', ['AUTH_REQUEST']),
    initialVerification()
    {
      let valid = this.isEmailAddressValid(this.emailAddress) && this.password.length > 0;
      if (valid)
      {
        let payload = {username: this.emailAddress, password: this.password};
        this.AUTH_REQUEST(payload).then((response) =>
        {

        }).catch(error =>
        {
          showErrorMessage(error.message);
        });
      } else
      {
        this.incorrectLoginCount++;
      }
    },
    resetLoginForm()
    {
      this.emailAddress = "";
      this.password = "";
    },
    isEmailAddressValid(email)
    {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
  },
  watch: {
    incorrectLoginCount: function ()
    {
      if (this.incorrectLoginCount >= this.incorrectLoginThreshHold)
      {
        showErrorMessage('Incorrect threshold exceeded. Please wait 5 seconds');
        this.disabled = true;
        setTimeout(() =>
        {
          this.disabled = false
          this.incorrectLoginCount = 0;
        }, 5000)
      }
    }
  },
  computed: {},
  mounted()
  {
  }
}
</script>

<style scoped>
.login-card {
  max-width: 600px;
  width: 100%;
  max-height: 450px;
  height: 100%;
}

.login-card-position {
  margin-left: auto;
  margin-right: auto;
}
</style>
