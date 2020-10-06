<template>
  <v-row>
    <h3 class="mt-4 title">join.tsh.io</h3>
    <v-col sm="3">
      <v-text-field
        v-model="searchName"
        col="2"
        append-icon="search"
        placeholder="search"
        outlined
        dense
        @keyup.exact="getFilteredResult($event)"
        class="search-bar"
      />
    </v-col>
    <div class="d-flex">
      <v-checkbox
        v-model="active"
        label="Active"
        class="mr-4 ml-2"
        color="#4460F7"
      />
      <v-checkbox
        v-model="promo"
        label="Promo"
        color="#4460F7"
      />
    </div>
    <v-row class="avatar">
      <v-menu offset-y>
        <template v-slot:activator="{ on: menu, attrs }">
          <v-btn
            color="white"
            fab
            depressed
            v-bind="attrs"
            v-on="{ ...menu }"
          >
            <v-avatar>
              <img
                src="https://picsum.photos/200"
                alt="avatar"
              >
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in dropdownItems"
            :key="index"
            :to="item.route"
            class="mx-4"
            style="cursor: pointer;"
          >
          <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  name: 'Header',
  data () {
    return {
      dropdownItems: [
        { title: 'Log out', name: 'logout', route: '/login' }
      ],
      searchName: "",
      active: false,
      promo: false
    }
  },
  computed: {
    ...mapGetters(['getFilteredProducts'])
  },
  methods: {
    onItemClick (itemName) {
      if (itemName === 'logout') {
        this.$router.push({ name: 'Login' })
      }
    },
    getFilteredResult: debounce(function() {
      this.fetchFilteredProducts(this.searchName)
    }, 1000),
    ...mapActions(['fetchFilteredProducts'])
  }
}
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: flex-end;
}
@media screen and (min-width: 250px) and (max-width: 850px) {
  .title {
    margin-left: 10px;
  }
  .search-bar {
    width: 85vw;
    height: auto;
  }
  .avatar {
    position: absolute;
    right: 10px;
  }
}
</style>
