export default {
  state: {
    myacc: [],
  },
  mutations: {
    setMyAcc(state, payload) {
      state.myacc = payload
    },

  },
  actions: {
    setMyAcc ({commit}, payload) {
      // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
      commit('setMyAcc', payload)
    }
  },
  getters: {
    getMyAcc (state) {
      return state.myacc
    },
  },
  modules: {
  }
}
