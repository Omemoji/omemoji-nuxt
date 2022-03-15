<template>
  <v-card style="padding: 15px 14px; margin: 0px 0 0">
    <v-card-title class="justify-center">
      <h2>Contents</h2>
    </v-card-title>
    <hr style="margin: 0 1px 15px" />
    <v-row no-gutters>
      <v-col v-for="n in 10" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          style="margin: 1px"
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
