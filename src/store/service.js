import axios from 'axios'
import store from '@/store'

const apiClient = axios.create({
  baseURL: 'https://join-tsh-api-staging.herokuapp.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (config) => {
    store.commit('requests/setApiRequest')
    return config
  },
  error => Promise.reject(error)
)

apiClient.interceptors.response.use(
  (res) => {
    store.commit('requests/setFinishedRequest')
    return res;
  },
  (error) => {
    store.commit('requests/setFinishedRequest')

    return Promise.reject(error);
  }
)

export default {
  getProducts() {
    return apiClient.get('/product')
  },
  // getFilteredProducts() {
  //   .get("", {
  //         params: {
  //           search: this.keyword
  //         }
  //       })
  // }
}
