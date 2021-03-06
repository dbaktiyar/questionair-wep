import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import store from './store'
import '../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: {
//     App
//   },
//   template: '<App/>',
//   methods: {
//     checkSignUp () {
//       if (this.$store.getters.checkAuth) {
//         this.$router.push('/login')
//       } else {
//         this.$router.push('/applications')
//       }
//     }
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
