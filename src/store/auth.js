import axios from 'axios'

export default {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') || ''
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        console.log(user)
        axios({
          url: 'https://asprof-test.azurewebsites.net/api/auth/token/',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const user = resp.data.refresh
            const token = resp.data.access

            console.log('auth token-access:' + token)
            console.log('auth refresh: ' + user)

            localStorage.setItem('token', token)
            localStorage.setItem('user', user)

            axios.defaults.headers.common['Authorization'] = token

            commit('auth_success', {token, user})
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'https://asprof-test.azurewebsites.net/api/users/register/',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const user = resp.data.refresh
            const token = resp.data.access

            localStorage.setItem('token', token)
            localStorage.setItem('user', user)

            axios.defaults.headers.common['Authorization'] = token

            commit('auth_success', {token, user})
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, obj) {
      state.status = 'success'
      console.log('auth_success token-access: ' + obj.token)
      console.log('auth_success refresh: ' + obj.user)
      state.token = obj.token
      state.user = obj.user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
      state.user = ''
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getToken(state) {
      return state.token
    },
    getAcs(state) {
      return state.user
    }
  }
  // async logout () {
  //   await signOut(auth).then(() => {
  //     // Sign-out successful.
  //   }).catch((error) => {
  //     // An error happened.
  //   })
  // },
}

