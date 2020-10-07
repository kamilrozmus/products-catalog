<template>
  <div>
    <PaginatedProducts
      :data="products"
      :total-pages="Math.ceil(products.length / itemsPerPage)"
      :total="products.length"
      :per-page="itemsPerPage"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import PaginatedProducts from '@/components/PaginatedProducts.vue'

export default {
  name: 'Products',
  components: { PaginatedProducts },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 12
    }
  },

  methods: {
    onPageChange(page) {
      this.currentPage = page
		},
		...mapActions(['fetchFilteredProducts']),
  },

  computed: {
      ...mapGetters({
      products: 'getFilteredProducts'})
  },

  created() {
    this.fetchFilteredProducts('')
  }
}
</script>
