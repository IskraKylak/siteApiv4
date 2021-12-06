import axios from "axios";

export default {
  state: {
  },
  mutations: {
    SET_INFO3: (state, info3) => {
      state.info3 = info3;
    }
  },
  actions: {
    GET_INFO3_FROM_API({commit}) {
      return axios("https://asprof-test.azurewebsites.net/api/content/asprofosvit/presidium/?format=json", {
        method: 'GET'
      }).then((info3) => {
        commit('SET_INFO3', info3.data);
        return info3;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  getters: {
    getInfo3Api(state) {
      return state.info3
    },
  },
  modules: {}
}
