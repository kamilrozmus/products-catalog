import Vue from "vue";
import Vuex from "vuex";

import productService from './service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    getProducts: state => state.products
  },
  mutations: {
    SET_PRODUCTS(state, items) {
      state.products = items
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      await productService.getProducts()
      .then(response => {
        commit('SET_PRODUCTS', response.data.items)
      })
      .catch(error => {
        console.log('Error has occured' + error)
      })
    }
  },
  modules: {},
});
