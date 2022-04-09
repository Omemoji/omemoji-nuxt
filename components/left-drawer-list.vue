<template>
  <v-list app style="padding: 8px 0 0 0">
    <v-list-item style="margin: 0" class="d-flex justify-center">
      <v-img alt="omemoji" v-bind:src="omemoji_icon" style="max-width: 200px">
      </v-img>
    </v-list-item>
    <v-list-item class="justify-center">
      <h2>omemoji</h2>
    </v-list-item>
    <v-list-item class="justify-center">
      <p>筑波大学情報学群情報科学類(coins20)</p>
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
    <hr />
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      omemoji_icon: require("@/static/omemoji.png"),
      menu: false,
      fixed: false,
      menus: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
          blank: true,
        },
      ],
      miniVariant: false,
      rightDrawer: false,
    };
  },
};
</script>