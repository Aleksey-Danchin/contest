import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    problems: []
  },

  mutations: {
    update (state, data) {
      Object.assign(state, data)
    }
  },

  actions: {
    loadContest ({ commit }, address) {
      fetch(address)
        .then(x => x.json())
        .then(x => commit('update', x))
    }
  }
})
