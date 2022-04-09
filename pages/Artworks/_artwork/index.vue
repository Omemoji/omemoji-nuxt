<template>
  <v-card class="pa-3 mb-3">
    <v-card
      outlined
      class="d-flex justify-center"
      width="100%"
      color="grey lighten-2"
    >
      <v-img max-height="600px" :src="artwork.image" contain></v-img>
    </v-card>
    <v-card class="mt-3 pa-3" outlined>
      <v-card-title class="justify-center">
        <h2>{{ artwork.title }}</h2>
      </v-card-title>
      <p>
        {{ artwork.caption }}
      </p>
      <hr class="mb-3" />
      <ul class="pa-0">
        <li>
          <h3>Category</h3>
          <p>Artwork</p>
        </li>
        <li>
          <h3>Tools</h3>
          <p>{{ artwork.tool }}</p>
        </li>
      </ul>
    </v-card>
  </v-card>
</template>

<script>
export default {
  computed: {
    artwork() {
      
      const artwork = this.$store.getters["json/getArtwork"].filter(item => {
        return item.id === this.$route.params.item
      })

    },
  },
};
</script>