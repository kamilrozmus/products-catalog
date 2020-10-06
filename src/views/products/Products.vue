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
      v-for="item in products"
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
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header'
export default {
  name: 'ProductList',
  components: { Header },
  computed: {
    ...mapGetters({
      products: 'getFilteredProducts',
      activeProducts: 'getActiveProducts',
      promoProducts: 'getPromoProducts'
    })
  },
  methods: {
    ...mapActions(['fetchFilteredProducts'])
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
