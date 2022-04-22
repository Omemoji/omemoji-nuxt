import colors from "vuetify/es5/util/colors";
const artworksList = require("./data/artworks.json");
export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - 創作物紹介",
    title: "Home",
    htmlAttrs: {
      lang: "en",
      prefix: "og: http://ogp.me/ns#",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content: "omemojiのポートフォリオ",
      },
      { hid: "og:site_name", property: "og:site_name", content: "創作物紹介" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", content: "https://www.omemoji.dev/" },
      { hid: "og:title", property: "og:title", content: "創作物紹介" },
      {
        hid: "og:description",
        property: "og:description",
        content: "omemojiのポートフォリオ",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.omemoji.dev/omemoji_square.png",
      },
      { name: "twitter:card", content: "summary" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxt/image",
  ],
  optimizedImages: {
    optimizeImagesInDev: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/google-gtag",
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },
  "google-gtag": {
    id: "G-XEDJELQWHL",
    debug: true,
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: { 
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    routes() {
      return artworksList.map((item) => {
        return `Artworks/${item.id}`;
      });
    },
  },
};
