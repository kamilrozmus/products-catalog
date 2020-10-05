<template>
  <div class="content">
    <div
      v-for="item in products"
      :key="item.id"
      class="child"
    >
      <div>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProductList',
  computed: {
    ...mapGetters({
      products: 'getFilteredProducts'
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
  border-radius: 10px;
  width: 100%;
  height: 45px;
  &.active {
    background-color: #4460f7;
  }
  &.disabled {
    background-color: #9194a5;
    cursor: default;
    pointer-events: none;
  }
}
</style>
