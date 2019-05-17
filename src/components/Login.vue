<template>
  <div class="slds-align_absolute-center">
    <div class="login slds-action-overflow--touch__content">

      <img class="cbs-auth-logo slds-align--absolute-center" alt="Vue logo" src="../assets/cbs-logo.svg">

      <form class="login-form slds-box--border" action="#" @submit.prevent="submit">

        <div class="form-group slds-form-element" v-bind:class="{'slds-has-error': validation.username}">
          <label class="slds-form-element__label" for="username">Username</label>
          <input type="text" id="username" class="slds-input" placeholder="Chris" v-model="form.username" />
        </div>

        <span class="slds-text-color--error cbs-auth__error-message" v-if="validation.username">
          {{ validation.username[0] }}
        </span>

        <div class="form-group slds-form-element" v-bind:class="{'slds-has-error': validation.password}">
          <label class="slds-form-element__label" for="password">Password</label>
          <input type="password" id="password" class="slds-input" placeholder="*********" v-model="form.password" />
        </div>

        <span class="slds-text-color--error cbs-auth__error-message" v-if="validation.password">
          {{ validation.password[0] }}
        </span>

        <input class="slds-button slds-button--brand" type="submit" value="Sign in" />

      </form>
    </div>
  </div>
</template>

<script>

// import AuthenticationService from '../services/AuthenticationService'

export default {

  name: 'Login',

  data () {
    return {
      validation: [],
      form: {
        username: null,
        password: null
      }

    }
  },

  methods: {
    async submit () {
      const payload = {
        username: this.form.username,
        password: this.form.password
      }

      this.$store
        .dispatch('SIGN_IN', payload)
        .then(() => {
          this.$router.push({ path: '/applications' })
        })
        .catch(er => {
          this.error = 'User not authenticated'
        })
    }

    // async submit () {
    //   // this.$router.push({ name: 'applications' })
    //   try {
    //     const response = await AuthenticationService.login(
    //       {
    //         password: this.form.password,
    //         username: this.form.username
    //       }
    //     )
    //     this.$store.dispatch('setToken', response.data)
    //     // this.$store.dispatch('setUser', response.data.user.js)
    //     this.$router.push({ name: 'applications' })
    //   } catch (error) {
    //     // this.error = error.response.data.error
    //     this.validation = error.response.data
    //     this.error = error.response.data.message
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
  .slds-align_absolute-center {
    height: 5rem;
  }

  .cbs-auth-logo {
    margin-bottom: 25px;
    width: 200px;
    height: 121px;
  }

  .login {
    width: 350px;
  }

  .login-form {
    border-radius: 4px;
    border: 1px solid #d8dde6;
    padding: 20px;
    margin-top: 25px;
  }

  .slds-form-element__label {
    display: inline-block;
    color: #54698d;
    font-size: 0.75rem;
    line-height: 1.5;
    margin-right: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .slds-form-element__control {
    margin-bottom: 12px;
  }

  .slds-input {
    padding: 12px;
    line-height: 1;
  }

  .slds-button--brand {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 16px;
    height: 44px;
    background-color: #1E97CE;
    border: 1px solid #1E97CE;
  }
  .slds-button--brand:hover {
    background-color: #1E97CE;
    border: 1px solid #1E97CE;
  }
  .slds-button--brand:active {
    background-color: #1E97CE;
    border: 1px solid #1E97CE;
  }
  .slds-button--brand:focus {
    background-color: #1E97CE;
    border: 1px solid #1E97CE;
  }
</style>
