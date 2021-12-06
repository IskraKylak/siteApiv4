import axios from "axios";

export default {
  state: {
  },
  mutations: {
    SET_INFO5: (state, info5) => {
      state.info5 = info5;
    }
  },
  actions: {
    GET_INFO5_FROM_API({commit}) {
      return axios("https://asprof-test.azurewebsites.net/api/content/asprofosvit/experts/?format=json", {
        method: 'GET'
      }).then((info5) => {
        commit('SET_INFO5', info5.data);
        return info5;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  getters: {
    getInfo5Api(state) {
      return state.info5
    },
  },
  modules: {}
}
