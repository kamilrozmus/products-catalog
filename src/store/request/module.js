const state = {
  apiRequest: 0
}

const getters = {
  getApiRequest: state => state.apiRequest > 0
}

const mutations = {
  setApiRequest(state) {
   state.apiRequest++
  },
  setFinishedRequest(state) {
    state.apiRequest--
  }
}

const module = {
  namespaced: true,
  state,
  mutations,
  getters
}

export default module
