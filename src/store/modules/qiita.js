import axios from 'axios'

const state = {
  items: []
}

const getters = {
  getQiitaDetail: (state) => (id) => {
    return state.items.find(item => item.id+'' === id+'');
  }
}

const mutations = {
  setQiitaList(state, items) {
    state.items = items;
  }
}

const actions = {
  async getQiitaList({ commit }, params) {
    var res = await axios.get("https://qiita.com/api/v2/items", { params });
    commit('setQiitaList', res.data)
    return res;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}