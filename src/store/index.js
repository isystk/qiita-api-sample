import Vue from 'vue'
import Vuex from 'vuex'
import qiita from './modules/qiita'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    qiita
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})