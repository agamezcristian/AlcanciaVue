import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valueToSend: 0 
  },
  mutations: {
    setSendValue(state, val){
      state.valueToSend = val
    }
  },
  actions: {
    clearData({commit}){
      commit('setSendValue', null)
    }
  },
  modules: {
  }
})