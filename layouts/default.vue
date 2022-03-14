<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="right"
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <h3>Link</h3>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :href="item.href"
          v-bind="
            item.blank
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : false
          "
          router
          exact
        >
          <v-list-item-action>
            <v-icon target="_blank" rel="noopener noreferrer">{{
              item.icon
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#a40000">
      <NuxtLink
        class="white--text mx-4 my-7"
        style="text-decoration: none"
        to="/"
      >
        <h1>
          <v-toolbar-title style="font-size: 32px" v-text="title" />
        </h1>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click.stop="drawer = !drawer"
        color="#ffffff"
        class=""
      />
      <v-list class="d-flex" color="transparent" v-else>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :href="item.href"
          v-bind="
            item.blank
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : false
          "
          exact
        >
          <v-icon  target="_blank" color="white" rel="noopener noreferrer">{{
            item.icon
          }}</v-icon>
        </v-list-item>
      </v-list>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="10" style="max-width: 800px;">
            <Nuxt />
            <gallery />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      class="text-center justify-center"
      color="#000000"
      app
    >
      <span class="white--text"
        >&copy; {{ new Date().getFullYear() }} omemoji</span
      >
    </v-footer>
  </v-app>
</template>

<style >
ul {
  list-style-type: none;
}
</style>


<script>
import gallery from '~/components/gallery.vue';
export default {
  components: { gallery },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-twitter",
          title: "Twitter",
          href: "https://twitter.com/omemoji_itf",
          blank: true,
        },
        {
          icon: "mdi-instagram",
          title: "Instagram",
          href: "https://www.instagram.com/omemoji/",
          blank: true,
        },
        {
          icon: "mdi-github",
          title: "GitHub",
          href: "https://github.com/Omemoji",
          blank: true,
        },
        {
          icon: "mdi-youtube",
          title: "YouTube",
          href: "https://www.youtube.com/channel/UCe1R2Wcu50u9Nm_HkZO6llA",
          blank: true,
        },
        {
          icon: "mdi-brush",
          title: "The end of fall",
          to: "/the_end_of_fall",
        },
        {
          icon: "mdi-alert-circle",
          title: "Error test",
          to: "/error",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "創作物紹介",
    };
  },
};
</script>
