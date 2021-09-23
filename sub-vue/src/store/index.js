import Vue from 'vue'
import Vuex from 'vuex'
import globalState from './modules/globalState'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    globalState,
  },
  getters,
})

export default store
