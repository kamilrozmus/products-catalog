<template>
  <div>
    <button
      type="button"
      class="button-item active"
      style="color: white;"
      @click.stop="onOpenDialog"
    >
      Show details
    </button>
    <v-dialog
      max-width="600px"
      v-model="dialog"
      :retain-focus="false"
      overlay-color="#1A1B1D"
      overlay-opacity="0.9"
    >
      <v-card>
        <v-card-title class="headline">
          <v-icon @click="dialog = false">clear</v-icon>
        </v-card-title>
        <div>
          <img
            :src="item.image"
            alt="image"
            class="img-child"
            width="600px;"
          >
          <h4 class="mt-3 ml-3">{{ item.name }}</h4>
          <div class="description py-4 ml-3">{{ item.description }}</div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "ItemDialog",
   props: {
    item: {
      default: {}
    }
  },

  data() {
    return {
      dialog: false
    }
  },

  methods: {
    onOpenDialog() {
      this.dialog = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

.headline {
  display: flex;
  justify-content: flex-end;
}
</style>
