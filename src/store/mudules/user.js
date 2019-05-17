import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
// import auth0 from 'auth0-js'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const TOKEN = 'token'

const state = {
  token: localStorage.getItem(TOKEN)
}

const mutations = {
  SIGN_IN: (state, newToken) => {
    localStorage.setItem(TOKEN, newToken)
    state.token = newToken
  },
  SIGN_OUT: (state) => {
    localStorage.removeItem(TOKEN)
    state.token = null
  }
}

const actions = {
  SIGN_IN: ({ commit }, payload) => {
    // const body = {
    //   'Username': 'mobile',
    //   'Password': '123123'
    // }

    return new Promise((resolve, reject) => {
      axios.post(`http://localhost:8080/oauth/token?grant_type=password&username=${payload.username}&password=${payload.password}`,
        {},
        {
          headers: { 'Authorization': 'Basic bW9iaWxlOm1vYjEyMw==', 'Content-Type': 'application/json' }
        })
        .then((response) => {
          commit('SIGN_IN', response.data.token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

const user = {
  state,
  mutations,
  actions
}

export default user
// import createPersitedState from 'vuex-persistedstate'
//
// export default {
//   strict: true,
//   plugins: [
//     createPersitedState()
//   ],
//   state: {
//     token: null,
//     user: null,
//     isUserLoggedIn: false
//   },
//   mutations: {
//     setToken (state, token) {
//       state.token = token
//       if (token) {
//         state.isUserLoggedIn = true
//       } else {
//         state.isUserLoggedIn = false
//       }
//     },
//     setUser (state, user) {
//       state.user = user
//     }
//   },
//   actions: {
//     setToken ({ commit }, token) {
//       commit('setToken', token)
//     },
//     setUser ({ commit }, user) {
//       commit('setUser', user)
//     }
//   }
// }
