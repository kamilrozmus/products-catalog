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
<style lang="scss">
@import '@/styles/variables.scss';

.app {
  padding: 40px;
  margin: auto;
  width: 90vw;
}

.button-item {
  color: $white-default;
  border-radius: 4px;
  width: 100%;
  height: 45px;
  &.active {
    background-color: $purple-primary;
  }
  &:hover {
    background-color: $purple-hover;
  }
  &.disabled {
    background-color: $grey-custom;
    cursor: default;
    pointer-events: none;
  }
}

.description {
  text-align: justify;
  margin-right: 15px;
  color: $grey-custom;
}

@media screen and (min-width: 320px) and (max-width: 850px) {
  .app {
    margin-top: 20px;
    padding: 15px;
  }
}
</style>
