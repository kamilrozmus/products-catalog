<template>
  <v-app class="app">
    <v-main>
      <Header />
      <div class="content">
      <HelloWorld/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'


export default {
  name: 'App',

  components: {
    HelloWorld,
    Header
  },

  data: () => ({
    //
  }),

}
</script>
<style scoped>
.app {
  padding: 40px;
  margin: auto;
  width: 85vw;
}
</style>
