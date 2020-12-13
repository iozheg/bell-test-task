import { Item } from '@/types';
import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [] as Item[],
  },
  mutations: {
    setData(state, data: Item[]) {
      state.list = data;
      console.log(data);
    },
  },
  actions: {
    async loadData({ commit }) {
      const { data } = await Axios.get(
        'https://next.json-generator.com/api/json/get/EkBoWek3K'
      );
      commit('setData', data);
    },
  },
  modules: {},
});
