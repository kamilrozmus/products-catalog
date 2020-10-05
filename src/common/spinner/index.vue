<template>
  <Loading
    :active.sync="getApiRequest"
    :can-cancel="true"
    :is-full-page="true"
    :z-index="999"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'

export default {
  components: {
    Loading
  },
  computed: {
    ...mapGetters("requests", ["getApiRequest"])
  }
}
</script>
