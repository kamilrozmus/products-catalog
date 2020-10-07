<template>
<div>
  <div>
    <Header />
  </div>
  <div class="content">
     <div v-if="products.length === 0" class="empty-list">
        <div>
          <img src="@/assets/empty-list.png">
        </div>
        <div class="top-line">Ooops... It's empty here</div>
        <div class="bottom-line">There's no products on the list</div>
      </div>
    <div
      v-for="item in paginatedData"
      :key="item.id"
      class="child"
    >
      <div v-if="products.length !== 0">
        <img
          :src="item.image"
          alt="image"
          class="img-child"
        />
        <h4>{{ item.name }}</h4>
        <div class="description">{{ item.description }}</div>
        <v-rating
          v-model="item.rating"
          background-color="orange lighten-3"
          color="orange"
          small
        ></v-rating>
        <div v-if="item.active === true">
        <button class="button active">
          Show details
        </button>
        </div>
        <div v-else>
          <button class="button disabled">
          Unavailable
        </button>
        </div>
      </div>
    </div>
 	<ul class="pagination" v-if="data.length > 5 || currentPage > 1">
        <li class="pagination-item" title="Первая страница">
          <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
            <i class="fas fa-chevron-left"></i> <i class="fas fa-chevron-left"></i>
          </button>
        </li>

        <li class="pagination-item" title="Предыдущая страница">
          <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
            <i class="fas fa-chevron-left"></i>
          </button>
        </li>

        <li class="pagination-item" v-for="(page, index) in pages" :key="index">
          <button 
          type="button" 
          @click="onClickPage(page.number)" 
          :disabled="page.isDisabled" 
          :class="{ active: isPageActive(page.number) }">
            {{ page.number }}
          </button>
        </li>

        <li class="pagination-item" title="Следующая страница">
          <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
            <i class="fas fa-chevron-right"></i>
          </button>
        </li>
        <li class="pagination-item" title="Последняя страница">
          <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
            <i class="fas fa-chevron-right"></i> <i class="fas fa-chevron-right"></i>
          </button>
        </li>
      </ul>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header'

export default {
  name: 'ProductList',
  components: { Header },
  props: {
    data: {
      type: Array,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },
  data () {
    return {
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters({
      products: 'getFilteredProducts',
      activeProducts: 'getActiveProducts',
      promoProducts: 'getPromoProducts'
    }),
    paginatedData(){
      let start = (this.currentPage - 1) * this.perPage, end = start + this.perPage
      return this.data.slice(start, end)
    },
    startPage() {
      if (this.currentPage === 1) return 1
      if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons -1)
      return this.currentPage - 1
    },
    endPage() { return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages) },
    pages() {
      let range = []
      for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage 
        });
      }
      return range
    },
    isInFirstPage() { return this.currentPage === 1 },
    isInLastPage() { return this.currentPage === this.totalPages }
  },
  methods: {
    ...mapActions(['fetchFilteredProducts']),
    onPageChange(page) {
      this.currentPage = page;
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);   
    },
    isPageActive(page) {
      return this.currentPage === page
    },
    
    onPageChange(page) {
      this.currentPage = page;
    }
  },
  created() {
    this.fetchFilteredProducts('')
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.child {
  flex: 1 1 calc(25% - 24px);
  margin: 12px;
}

.img-child {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.description {
  text-align: justify;
  margin-right: 15px;
  color: grey;
}

.button {
  color: white;
  border-radius: 4px;
  width: 100%;
  height: 45px;
  &.active {
    background-color: #4460F7;
  }&:hover {
    background-color: #2140E8,;
  }
  &.disabled {
    background-color: #9194A5;
    cursor: default;
    pointer-events: none;
  }
}
.empty-list {
  text-align: center;
}
</style>
