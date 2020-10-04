<template>
  <div class="content">
    <div v-for="item in products" :key="item.id">
      <div class="ma-3 child">
        <img
          :src="item.image"
          style="max-width: 300px;"
        >
        <div>{{ item.name }}</div>
        <div style="max-width: 150px;">{{ item.description }}</div>
        <v-rating
          v-model="item.rating"
          background-color="orange lighten-3"
          color="orange"
          small
        ></v-rating>
        <v-btn
          large
        >
          Show details
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },
  created() {
    this.fetchProducts()
  }
}
</script>
<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>
