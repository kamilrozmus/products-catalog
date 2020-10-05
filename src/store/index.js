import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

import requests from '@/store/request/module'
import productService from './service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    filteredProducts: []
  },
  getters: {
    getProducts: state => state.products,
    getFilteredProducts: state => state.filteredProducts
  },
  mutations: {
    SET_PRODUCTS(state, items) {
      state.products = items
    },
    SET_FILTERED_PRODUCTS(state, items) {
      state.filteredProducts = items
    }
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
    },
    async fetchFilteredProducts({ commit }, name) {
      await axios.get("https://join-tsh-api-staging.herokuapp.com/product/", {
        params: {
          search: String(name)
        }
      })
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
