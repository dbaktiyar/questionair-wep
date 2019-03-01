<template>
  <div class="slds-align_absolute-center">
    <div class="login slds-action-overflow--touch__content">
      <img class="cbs-auth-logo slds-align--absolute-center" alt="Vue logo" src="../assets/cbs-logo.svg">
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="login-form slds-box--border">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="username-id">Username</label>
          <div class="slds-form-element__control">
            <input type="text" id="username-id" class="slds-input" placeholder="Chris" v-model="credentials.username" />
          </div>
        </div>
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="password-id">Password</label>
          <div class="slds-form-element__control">
            <input type="password" id="password-id" class="slds-input" placeholder="*********" v-model="credentials.password" />
          </div>
        </div>
        <!--<input class="slds-button slds-button&#45;&#45;brand" @click="submit()" type="submit" value="Sign in" />-->
        <button class="slds-button slds-button--brand" v-on:click="sibmit()">Sign in</button>
      </div>

    </div>
  </div>
</template>

<script>

export default {

  name: 'Login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },

  methods: {
    sibmit () {
      const payload = {
        username: this.credentials.username,
        password: this.credentials.password
      }

      this.$store
        .dispatch('SIGN_IN', payload)
        .then(() => {
          this.$router.push({ path: '/about' })
        })
        .catch(er => {
          this.error = 'User not authenticated'
        })

      // this.$router.push({ path: '/about' })
    }
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
