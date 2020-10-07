<template>
  <v-app class="app">
    <v-main>
      <router-view />
      <Spinner />
    </v-main>
  </v-app>
</template>

<script>
import Spinner from './common/spinner'


export default {
  name: 'App',
  components: {
    Spinner
  },
}
</script>
<style scoped>
.app {
  padding: 40px;
  margin: auto;
  width: 90vw;
}

@media screen and (min-width: 320px) and (max-width: 850px) {
  .app {
    margin-top: 20px;
    padding: 15px;
  }
}
</style>
