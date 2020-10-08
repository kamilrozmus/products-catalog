<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="content">
      <div
        v-if="products.length === 0"
        class="empty-list">
        <div>
          <img
            src="@/assets/empty-list.png"
            alt="EmptyList"
          >
        </div>
        <div class="top-line">Ooops... It's empty here</div>
        <div class="bottom-line mt-2">There's no products on the list</div>
      </div>
      <div
        v-for="item in preparedData"
        :key="item.id"
        class="child"
      >
        <div v-if="products.length !== 0">
          <img
            :src="item.image"
            alt="image"
            class="img-child"
          >
          <h4>{{ item.name }}</h4>
          <div class="description-overflow my-3">{{ item.description }}</div>
          <v-rating
            v-model="item.rating"
            background-color="#B1B5C9"
            color="#F9A52B"
            small
          ></v-rating>
          <div v-if="item.active === true">
            <ItemDialog :item="item" />
          </div>
          <div v-else>
            <button
              type="button"
              class="button-item disabled"
              style="color: white;"
            >
              Unavailable
            </button>
          </div>
        </div>
      </div>
      <ul
        v-if="data.length > 5 || currentPage > 1"
        class="pagination mt-3"
      >
        <li class="pagination-item">
          <button
            type="button"
            @click="onClickFirstPage"
            :disabled="isInFirstPage"
          >
            First
          </button>
        </li>

        <li class="pagination-item">
          <button
            type="button"
            @click="onClickPreviousPage"
            :disabled="isInFirstPage"
          >
            <v-icon>keyboard_arrow_left</v-icon>
          </button>
        </li>

        <li
          v-for="(page, index) in pages"
          :key="index"
          class="pagination-item"
        >
          <button
            type="button"
            @click="onClickPage(page.number)"
            :disabled="page.isDisabled"
            :class="{ 'active-page': isPageActive(page.number) }"
            class="pagination-item"
          >
            {{ page.number }}
          </button>
        </li>

        <li class="pagination-item">
          <button
            type="button"
            @click="onClickNextPage"
            :disabled="isInLastPage"
          >
            <v-icon>keyboard_arrow_right</v-icon>
          </button>
        </li>
        <li class="pagination-item">
          <button
            type="button"
            @click="onClickLastPage"
            :disabled="isInLastPage"
          >
            Last
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header'
import ItemDialog from '@/components/ItemDialog'

export default {
  name: 'PaginatedProducts',
  components: { Header, ItemDialog },
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
    }
  },

  data() {
    return {
      openDialog: false
    }
  },

  computed: {
    ...mapGetters({
      products: 'getFilteredProducts',
      activeProducts: 'getActiveProductsFilter',
      promoProducts: 'getPromoProductsFiler'
    }),
    preparedData() {
      let start = (this.currentPage - 1) * this.perPage, end = start + this.perPage
      const filteredData = this.filterData(this.data)
      return filteredData.slice(start, end)
    },
    startPage() {
      if (this.currentPage === 1) return 1
      if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons -1)
      return this.currentPage - 1
    },
    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
    },
    pages() {
      let pagesAmount = []
      for (let i = this.startPage; i <= this.endPage; i++ ) {
        pagesAmount.push({
          number: i,
          isDisabled: i === this.currentPage
        })
      }
      return pagesAmount
    },
    isInFirstPage() { return this.currentPage === 1 },
    isInLastPage() { return this.currentPage === this.totalPages }
  },

  methods: {
    ...mapActions(['fetchFilteredProducts']),
    filterData(slicedData) {
      return slicedData
        .filter(e => this.activeProducts ? e.active : e)
        .filter(e => this.promoProducts ? e.promo : e)
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
    isPageActive(page) {
      return this.currentPage === page
    },

    onPageChange(page) {
      this.currentPage = page
    },
    onOpenDialog(value) {
      this.openDialog = value
    }
  },

  created() {
    this.fetchFilteredProducts('')
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

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

.empty-list {
  margin-top: 50px;
  text-align: center;
  .top-line {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
    color: $black-default;
  }
  .bottom-line {
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    color: $grey-custom;
  }
}

.description-overflow {
  white-space: nowrap;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pagination {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: auto 0 0 0;
  list-style-type: none;
}

.pagination-item {
  button {
    margin: 0;
    border: none;
    background: none;
    color: $black-default;
    font-weight: 600;
    padding: .25rem .5rem;
    font-size: 16px;
    border-radius: .25rem;
  }
  &:hover {
    cursor: pointer;
    color: $purple-primary;
  }
  &.active-page {
    font-weight: bold;
    color: $purple-hover;
  }
}
</style>
