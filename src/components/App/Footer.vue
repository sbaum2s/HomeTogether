<template>
  <v-footer id="dashboard-core-footer" v-bind="$attrs" class="grey">
    <v-container>
      <v-row align="center">
        <!-- <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center mb-sm-0 mb-5"
          cols="auto"
        >
          <a
            :href="link.href"
            class="mr-0 grey--text text--darken-3"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col> -->
        <!-- {{ $vuetify.lang.t('$vuetify.close') }} -->
        <!-- {{sampleTranslate}} -->

        <v-col cols="12" md="auto">
          <div class="body-1 font-weight-light pt-0 pt-md-0 text-center">
            &copy; 2021, made by Timo
            <v-icon size="18">mdi-heart</v-icon>&nbsp; for a better web.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "dashboard-core-footer",

  data: () => ({
    links: [
      {
        href: false,
        text: "About Us",
      },

      {
        href: false,
        text: "Licenses",
      },
    ],
  }),
  computed: {
    sampleTranslate() {
      const selectedItemsText = "$vuetify.datePicker.itemsSelected";
      const candidateCount = this.$store.state.debug;
      return this.$vuetify.lang.t(selectedItemsText, candidateCount);
    },
  },
};
</script>

<style>
#dashboard-core-footer > a {
  font-size: 0.825rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
