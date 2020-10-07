import Vue from "vue";
import Vuex from "vuex";

import requests from '@/store/request/module';
import productService from './service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filteredProducts: [],
    activeProductsFilter: false,
    promoProductsFiler: false
  },

  getters: {
    getFilteredProducts: state => state.filteredProducts,
    getActiveProductsFilter: state => state.activeProductsFilter,
    getPromoProductsFiler: state => state.promoProductsFiler
  },

  mutations: {
    SET_FILTERED_PRODUCTS(state, items) {
      state.filteredProducts = items
    },
    SET_ACTIVE_PRODUCTS_FILTER(state, checkboxValue) {
      state.activeProductsFilter = checkboxValue
    },
    SET_PROMO_PRODUCTS_FILTER(state, checkboxValue) {
      state.promoProductsFiler = checkboxValue
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
    },
    setActiveFilter({ commit }, checkboxValue) {
      commit('SET_ACTIVE_PRODUCTS_FILTER', checkboxValue)
    },
    setPromoFilter({ commit }, checkboxValue) {
      commit('SET_PROMO_PRODUCTS_FILTER', checkboxValue)
    }
  },

  modules: {
    requests
  },
});
