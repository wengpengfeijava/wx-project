/**
 * Created by 46607 on 2017/6/26.
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  mutations: {
    toggleNav (state, index) {
      if (index > state.navTabIndex) {
        state.routerAnimateCss = 'animations'
      } else {
        state.routerAnimateCss = 'animations-reverse'
      }
      state.navTabIndex = index
    }
  },
  actions: {
    toggleNav (some, index) {
      some.commit('toggleNav', index)
    }
  },
  state: {
    navTabIndex: 1,
    routerAnimateCss: 'animations'
  }
})
export default store
