<template>
  <v-btn text icon rounded @click="$vuetify.theme.dark=!$vuetify.theme.dark">
    <v-icon v-if="$vuetify.theme.dark">mdi-brightness-4</v-icon>
    <v-icon v-else>mdi-brightness-7</v-icon>
  </v-btn>
</template>

<script>
//  https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components

// https://themeforest.net/item/vuse-vuejs-cli-material-admin/22745288

export default {
  data() {
    return {};
  },
  methods: {}
};
</script>