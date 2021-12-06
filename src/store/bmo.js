import axios from "axios";

export default {
  state: {
  },
  mutations: {
    SET_INFO6: (state, info6) => {
      state.info6 = info6;
    }
  },
  actions: {
    GET_INFO6_FROM_API({commit}) {
      return axios("https://asprof-test.azurewebsites.net/api/content/asprofosvit/BmoNpr/?format=json", {
        method: 'GET'
      }).then((info6) => {
        commit('SET_INFO6', info6.data);
        return info6;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  getters: {
    getInfo6Api(state) {
      return state.info6
    },
  },
  modules: {}
}
