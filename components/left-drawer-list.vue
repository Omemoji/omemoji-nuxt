<template>
  <v-list>
    <v-list-item style="margin: 0" class="d-flex justify-center">
      <v-img alt="omemoji" src="omemoji.png" style="max-width: 200px"> </v-img>
    </v-list-item>
    <v-list-item  class="justify-center">
      <h2>omemoji</h2>
    </v-list-item>
    <hr />
    <v-list-item v-for="(page, i) in menus" :key="i" :to="page.to" router exact>
      <v-list-item-action>
        <v-icon>{{ page.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="page.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      menu: false,
      fixed: false,
      menus: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
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
      rightDrawer: false,
    };
  },
};
</script>