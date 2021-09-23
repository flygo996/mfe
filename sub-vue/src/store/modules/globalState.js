const globalState = {
  state: {
    globalState: {},
  },
  mutations: {
    SET_GLOBAL_STATE(state, globalState) {
      state.globalState = globalState
    },
  },
  actions: {
    setGlobalState({ commit }, payload) {
      commit('SET_GLOBAL_STATE', payload)
    },
  },
}
export default globalState
