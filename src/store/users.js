export default {
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },

  },
  actions: {
    setUsers ({commit}, payload) {
      // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
      commit('setUsers', payload)
    }
  },
  getters: {
    getUsers (state) {
      return state.messages
    },
  },
  modules: {
  }
}
