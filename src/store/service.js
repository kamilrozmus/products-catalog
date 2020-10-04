import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://join-tsh-api-staging.herokuapp.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getProducts() {
    return apiClient.get('/product')
  }
}
