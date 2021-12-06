import axios from "axios";

export default {
  state: {
    info1: false,
  },
  mutations: {
    SET_BANER: (state, baner) => {
      state.baner = baner;
    }
  },
  actions: {
    GET_BANER_FROM_API({commit}) {
      return axios("https://asprof-test.azurewebsites.net/api/content/asprofosvit/main/banners/?format=json", {
        method: 'GET'
      }).then((baner) => {
        commit('SET_BANER', baner.data);
        return baner;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  getters: {
    getBanerApi(state) {
      return state.baner
    },
  },
  modules: {}
}
