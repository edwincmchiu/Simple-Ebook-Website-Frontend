import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false // Initial authentication state
  },
  mutations: {
    // Mutation to set authentication state
    setAuth(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    // Action to log in user and set authentication state
    login({ commit }) {
      // Perform login logic here, e.g., authenticate with backend
      // After successful login, set isAuthenticated to true
      commit('setAuth', true)
    }
  },
  modules: {}
})
