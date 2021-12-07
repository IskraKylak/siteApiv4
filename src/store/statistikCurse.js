export default {
  state: {
    statCurse: [],
  },
  mutations: {
    setStatCurs(state, payload) {
      state.statCurse = payload
    },

  },
  actions: {
    setStatCurs ({commit}, payload) {
      // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
      commit('setStatCurs', payload)
    }
  },
  getters: {
    getStatCurs (state) {
      return state.statCurse
    },
  },
  modules: {
  }
}
