import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expanded: false,
  },
  mutations: {
    toggleMode(state) {
      state.expanded = !state.expanded;
    },
  },
  actions: {
    toggleMode({ commit }) {
      commit('toggleMode');
    },
  },
  getters: {
    expanded(state) {
      return state.expanded;
    },
  },
});
