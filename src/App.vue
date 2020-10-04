<template>
  <v-app class="app">
    <v-main>
      <Header />
      <ProductList/>
    </v-main>
  </v-app>
</template>

<script>
import ProductList from './components/ProductList'
import Header from './components/Header'


export default {
  name: 'App',

  components: {
    ProductList,
    Header
  },

  data: () => ({
    //
  }),

}
</script>
<style scoped>
.app {
  padding: 40px;
  margin: auto;
  width: 90vw;
}
</style>
