import { Item } from '@/types';
import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [] as Item[],
    selected: [] as Item[],
  },
  mutations: {
    setData(state, data: Item[]) {
      state.list = data;
    },
    select(state, itemId: string) {
      const itemIndex = state.list.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        state.selected.push(state.list[itemIndex]);
        state.list.splice(itemIndex, 1);
      }
    },
    unselect(state, itemId: string) {
      const itemIndex = state.selected.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        state.list.push(state.selected[itemIndex]);
        state.selected.splice(itemIndex, 1);
      }
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
