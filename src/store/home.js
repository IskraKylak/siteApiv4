import axios from "axios";

export default {
  state: {
    info1: false,
  },
  mutations: {
    SET_INFO: (state, info) => {
      state.info = info;
    }
  },
  actions: {
    GET_INFO_FROM_API({commit}) {
      return axios("https://asprof-test.azurewebsites.net/api/content/asprofosvit/main/?format=json", {
        method: 'GET'
      }).then((info) => {
        commit('SET_INFO', info.data);
        return info;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  getters: {
    getInfoApi(state) {
      return state.info
    },
  },
  modules: {}
}
