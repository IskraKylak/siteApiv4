import axios from "axios";

export default {
  state: {
  },
  mutations: {
    SET_INFO1: (state, info1) => {
      state.info1 = info1;
    }
  },
  actions: {
    GET_INFO1_FROM_API({commit}) {
      return axios("https://asprof-test.azurewebsites.net/api/events/?format=json", {
        method: 'GET'
      }).then((info1) => {
        commit('SET_INFO1', info1.data);
        return info1;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  getters: {
    getInfo1Api(state) {
      return state.info1
    },
  },
  modules: {}
}
