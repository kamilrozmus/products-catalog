import Vue from "vue";
import Vuex from "vuex";

import requests from '@/store/request/module'
import productService from './service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filteredProducts: []
  },
  getters: {
    getFilteredProducts: state => state.filteredProducts
  },
  mutations: {
    SET_FILTERED_PRODUCTS(state, items) {
      state.filteredProducts = items
    }
  },
  actions: {
    fetchFilteredProducts({ commit }, search) {
      productService.getFilteredProducts(search)
      .then(response => {
        commit('SET_FILTERED_PRODUCTS', response.data.items)
      })
      .catch(error => {
        console.log('Error has occured' + error)
      })
    }
  },
  modules: {
    requests
  },
});
