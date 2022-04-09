<template>
  <v-card style="padding: 15px 14px; margin: 0px 0 0">
    <v-card-title class="justify-center">
      <h2>Contents</h2>
    </v-card-title>
    <hr style="margin: 0 1px 15px" />
    <v-row no-gutters>
      <v-col
        v-for="(artwork, i) in artworks"
        :key="i"
        class="d-flex child-flex"
        cols="4"
        ><nuxt-link :to="'/Artworks/' + artwork.id" style="margin: 1px">
          <nuxt-img
            quality="30"
            style="aspect-ratio: 1; object-fit: cover; width: 100%"
            :src="artwork.image"
            class="grey lighten-2 float-left"
          />
        </nuxt-link>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import artworks from "@/data/artworks.json";
export default {
  data() {
    return {
      artworks: artworks,
    };
  },
};
</script>
