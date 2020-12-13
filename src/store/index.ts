import { Item } from '@/types';
import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [] as Item[],
    selected: [] as Item[],
    filter: '',
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
    setFilter(state, value: string) {
      state.filter = value;
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
  getters: {
    filtered({ list, filter }) {
      const re = new RegExp(`${filter}{1}`, 'gi');
      const result: { item: Item; amount: number }[] = [];

      list.forEach(item => {
        const res = {
          item,
          amount: 0,
        };
        res.amount += Array.from(item.name.matchAll(re)).length;
        item.items.forEach(subitem => {
          res.amount += Array.from(subitem.name.matchAll(re)).length;
        });

        if (res.amount) {
          result.push(res);
        }
      });

      return result
        .sort((a, b) => (a.amount < b.amount ? 1 : -1))
        .map(item => item.item);
    },
  },
});
