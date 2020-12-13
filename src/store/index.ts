import { Item, HistoryItem, Actions, HistoryModes } from '@/types';
import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [] as Item[],
    selected: [] as Item[],
    filter: '',
    history: [] as HistoryItem[],
  },

  mutations: {
    setData(state, data: Item[]) {
      state.list = data;
    },
    select(state, index: number) {
      state.selected.push(state.list[index]);
      state.list.splice(index, 1);
    },
    unselect(state, index: number) {
      state.list.push(state.selected[index]);
      state.selected.splice(index, 1);
    },
    setFilter(state, value: string) {
      state.filter = value;
    },
    addHistoryItem(
      state,
      { index, action }: { index: number; action: Actions }
    ) {
      const sources = {
        [Actions.SELECT]: state.list,
        [Actions.UNSELECT]: state.selected,
      };
      const { id, name } = sources[action][index];

      state.history.push({
        id,
        name,
        action,
        datetime: new Date().toLocaleString(),
      });
    },
  },

  actions: {
    async loadData({ commit }) {
      const { data } = await Axios.get(
        'https://next.json-generator.com/api/json/get/EkBoWek3K'
      );
      commit('setData', data);
    },
    select({ state, commit }, itemId: string) {
      const itemIndex = state.list.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        commit('addHistoryItem', { index: itemIndex, action: Actions.SELECT });
        commit('select', itemIndex);
      }
    },
    unselect({ state, commit }, itemId: string) {
      const itemIndex = state.selected.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        commit('addHistoryItem', {
          index: itemIndex,
          action: Actions.UNSELECT,
        });
        commit('unselect', itemIndex);
      }
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

    actionList: ({ history }) => (type: HistoryModes) => {
      const action = {
        [HistoryModes.ALL]: undefined,
        [HistoryModes.SELECTED]: Actions.SELECT,
        [HistoryModes.UNSELECTED]: Actions.UNSELECT,
      }[type];

      return action !== undefined
        ? history.filter(item => item.action === action)
        : history;
    },
  },
});
