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
      if (process.env.NODE_ENV === 'development') {
        ;(() => commit('update', require('@/contestData')))();
      }

      else {
        fetch(address)
          .then(x => x.json())
          .then(x => commit('update', x))
      }

    }
  }
})
