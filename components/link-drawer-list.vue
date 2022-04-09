<template>
  <v-list>
    <v-list-item class="justify-center" >
      <h2>Link</h2>
    </v-list-item>
        <hr>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      :href="item.href"
      v-bind="
        item.blank ? { target: '_blank', rel: 'noopener noreferrer' } : false
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
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
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
      ],
    };
  },
};
</script>