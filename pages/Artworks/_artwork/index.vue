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
        <li>
          <h3>Description</h3>
          <p>{{ artwork.caption }}</p>
        </li>
      </ul>
    </v-card>
  </v-card>
</template>

<script>
export default {
  computed: {
    artwork() {
      console.log(this.$route.params.artwork);
      const artwork = this.$store.getters["json/getArtwork"].filter(
        (artwork) => {
          return artwork.id === this.$route.params.artwork;
        }
      );
      return artwork[0];
    },
  },
  head() {
    const artwork = this.$store.getters["json/getArtwork"].filter((artwork) => {
      return artwork.id === this.$route.params.artwork;
    });
    return {
      titleTemplate: "%s - 創作物紹介",
      title: artwork[0].title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:artwork[0].caption,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "創作物紹介",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", content: "https://www.omemoji.dev/"+`${this.$route.path}` },
        { hid: "og:title", property: "og:title", content: artwork[0].title+" - 創作物紹介" },
        {
          hid: "og:description",
          property: "og:description",
          content: artwork[0].caption,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.omemoji.dev/omemoji_square.png",
        },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
};
</script>