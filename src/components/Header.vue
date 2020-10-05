<template>
  <v-row style="padding: 0 40px 0 40px;">
    <h3 class="mt-4">join.tsh.io</h3>
    <v-col sm="3">
      <v-text-field
        v-model="searchName"
        col="2"
        append-icon="search"
        placeholder="search"
        outlined
        dense
        class="mx-4"
        @keyup.exact="getFilteredResult($event)"
      />
    </v-col>

    <v-checkbox
      label="Active"
      class="mr-4"
    />

    <v-checkbox
      label="Promo"
    />
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
          <v-list-tile
            v-for="(item, index) in dropdownItems"
            :key="index"
            @click="onItemClick(item.name)"
            class="mx-4"
            style="cursor: pointer;"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
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
        { title: 'Log out', name: 'logout' }
      ],
      searchName: ""
    }
  },
  computed: {
    ...mapGetters(['getFilteredProducts'])
  },
  methods: {
    onItemClick (itemName) {
      if (itemName === 'logout') {
        this.$router.push({ path: '/login'})
      }
    },
    getFilteredResult: debounce(function() {
      this.fetchFilteredProducts(this.searchName)
    }, 1000),
    ...mapActions(['fetchFilteredProducts'])
  },
  created() {
    this.fetchFilteredProducts(String(this.searchName))
  }
}
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: flex-end;
}
</style>
