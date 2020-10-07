<template>
  <div>
    <PaginatedProducts
      :data="products"
      :total-pages="Math.ceil(products.length / 4)"
      :total="products.length"
      :per-page="24"
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
  data(){
    return {
			currentPage: 1
    }
  },
  methods: {
		...mapActions(['fetchFilteredProducts']),
    onPageChange(page) {
      this.currentPage = page;
		},
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
