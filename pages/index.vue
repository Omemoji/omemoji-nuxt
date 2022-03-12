<template>
    <v-card class="logo py-4 ">
    <omemojiLogo />
    <v-card-title class="justify-center">
      <h2>Profile</h2>
    </v-card-title>
    <ul>
      <li>
        <v-card-title>
          <h3>Username</h3>
        </v-card-title>
        <v-card-text>
          <p>omemoji</p>
        </v-card-text>
      </li>
    </ul>
    <v-card-text>
      <p>
        If you have questions, please join the official
        <a
          href="https://chat.vuetifyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="chat"
        >
          discord </a
        >.
      </p>
      <p>
        Find a bug? Report it on the github
        <a
          href="https://github.com/vuetifyjs/vuetify/issues"
          target="_blank"
          rel="noopener noreferrer"
          title="contribute"
        >
          issue board </a
        >.
      </p>
      <p>
        Thank you for developing with Vuetify and I look forward to bringing
        more exciting features in the future.
      </p>
      <div class="text-xs-right">
        <em><small>&mdash; John Leider</small></em>
      </div>
      <hr class="my-3" />
      <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
        Nuxt Documentation
      </a>
      <br />
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nuxt GitHub
      </a>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
    </v-card-actions>
            </v-card>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
