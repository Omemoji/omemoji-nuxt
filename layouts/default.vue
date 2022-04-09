<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="right"
      temporary
      app
    >
      <right-drawer-list />
    </v-navigation-drawer>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.width < left_width"
      v-model="menu"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      temporary
      app
    >
      <left-drawer-list />
      <link-drawer-list />
    </v-navigation-drawer>
    <v-app-bar color="#a40000" :clipped-left="clipped" fixed app>
      <v-icon
        v-if="$vuetify.breakpoint.width < left_width"
        @click.stop="menu = !menu"
        color="#ffffff"
        class=""
        large
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ "mdi-menu" }}
      </v-icon>
      <v-spacer v-if="$vuetify.breakpoint.width < left_width"></v-spacer>
      <NuxtLink class="white--text" style="text-decoration: none" to="/">
        <h1>
          <v-toolbar-title style="font-size: 32px" v-text="title" />
        </h1>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-icon
        v-if="$vuetify.breakpoint.width < right_width"
        @click.stop="drawer = !drawer"
        color="#ffffff"
        class=""
        large
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ "mdi-apps" }}
      </v-icon>
    </v-app-bar>
    <v-main>
      <v-container style="padding: 0px">
        <v-row justify="center" class="d-flex" no-gutters>
          <v-col cols="3" v-if="$vuetify.breakpoint.width >= left_width" app>
            <v-navigation-drawer
              permanent
              style="padding: 6px 0px 0; margin-left: auto"
            >
              <left-drawer-list />
              <link-drawer-list />
            </v-navigation-drawer>
          </v-col>
          <v-col
            app
            style="padding: 12px; margin: 0px"
            v-if="$vuetify.breakpoint.width < left_width"
          >
            <Nuxt />
            <gallery />
          </v-col>
          <v-col
            cols="8"
            app
            style="padding: 12px; margin: 0px"
            v-else-if="$vuetify.breakpoint.width < right_width"
          >
            <Nuxt />
            <gallery />
          </v-col>
          <v-col cols="6" app style="padding: 12px; margin: 0px" v-else>
            <Nuxt />
            <gallery />
          </v-col>

          <v-col cols="3" v-if="$vuetify.breakpoint.width >= right_width" app>
            <v-navigation-drawer permanent right style="padding: 6px 0px 0">
              <right-drawer-list />
            </v-navigation-drawer>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      class="text-center justify-center"
      :absolute="!fixed"
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
import gallery from "~/components/gallery.vue";
import LeftDrawerList from "~/components/left-drawer-list.vue";
import LinkDrawerList from "~/components/link-drawer-list.vue";
import RightDrawerList from "~/components/right-drawer-list.vue";
export default {
  components: { gallery, LeftDrawerList, LinkDrawerList, RightDrawerList },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      menu: false,
      fixed: false,
      left_width: 860,
      right_width: 1400,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "創作物紹介",
    };
  },
};
</script>
