/**
 * Created by 46607 on 2017/6/26.
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  mutations: {
    changeNav (state, b) {
      state.navTabDirection = b
    }
  },
  actions: {
    changeNav (some, a) {
      some.commit('changeNav', a)
    }
  },
  state: {
    navTabDirection: true
  }
})
export default store
