import axios from "axios";

export default {
  state: {
  },
  mutations: {
    SET_INFO4: (state, info4) => {
      state.info4 = info4;
    }
  },
  actions: {
    GET_INFO4_FROM_API({commit}) {
      return axios("https://asprof-test.azurewebsites.net/api/content/asprofosvit/gallery/?format=json", {
        method: 'GET'
      }).then((info4) => {
        commit('SET_INFO4', info4.data);
        return info4;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  getters: {
    getInfo4Api(state) {
      return state.info4
    },
  },
  modules: {}
}
