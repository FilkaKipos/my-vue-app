import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchUser({ commit, rootState }) {
      if (rootState.auth.token) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
          const response = await axios.get('http://localhost:3000/user', {
            headers: {
              Authorization: `Bearer ${rootState.auth.token}`
            }
          });
          commit('SET_USER', response.data);
        } catch (error) {
          commit('SET_ERROR', error);
        } finally {
          commit('SET_LOADING', false);
        }
      }
    }
  }
};
