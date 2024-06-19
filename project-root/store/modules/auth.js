// store/modules/auth.js
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loading: false,
    error: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try {
        const response = await axios.post('http://localhost:3000/auth/login', credentials); // обновляем URL
        const token = response.data.token;
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
      } catch (error) {
        commit('SET_ERROR', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
    }
  }
};
