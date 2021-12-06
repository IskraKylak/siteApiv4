export default {
  state: {
    messages: [],
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload
    },

  },
  actions: {
    setMessage ({commit}, payload) {
      // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
      commit('setMessage', payload)
    }
  },
  getters: {
    getMessage (state) {
      return state.messages
    },
  },
  modules: {
  }
}
