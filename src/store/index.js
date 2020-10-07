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
    getFilteredProducts: state => state.filteredProducts,
    getActiveProducts: state => state.filteredProducts.filter(data => data.active === true),
    getPromoProducts: state => state.filteredProducts.filter(data => data.promo === true)
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
        let reversed = response.data.items.reverse()
        commit('SET_FILTERED_PRODUCTS', reversed)
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
