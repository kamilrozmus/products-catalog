<template>
  <v-app class="app">
    <v-main>
      <Spinner />
      <Header />
      <ProductList/>
    </v-main>
  </v-app>
</template>

<script>
import ProductList from './components/ProductList'
import Header from './components/Header'
import Spinner from './common/spinner'

export default {
  name: 'App',
  components: {
    ProductList,
    Header,
    Spinner
  }
}
</script>
<style scoped>
.app {
  padding: 40px;
  margin: auto;
  width: 90vw;
}
</style>
