<template>
  <div class="px-4 py-2 d-flex">
    <v-menu :close-on-content-click="true" top offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              text
              rounded
              v-on="{ ...tooltip, ...menu }"
              class="text--second2ary text-lowercase"
            >
              <v-icon left>mdi-tag-outline</v-icon>
              {{ applicationVersion }}
              <v-icon left>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <span>V {{ applicationVersion }}</span>
        </v-tooltip>
      </template>
      <v-list>
        <LanguageModal />
        <v-divider></v-divider>
        <HelpModal />
        <!-- <FeedbackDialog activator="list-item" /> -->
        <AboutModal />
        <v-divider></v-divider>
        <v-list-item
          :active-class="
            `primary ${!$vuetify.theme.dark ? 'black' : 'green'}--text`
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-tag-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Datenbestand</v-list-item-title>
          <v-list-item-subtitle>
            {{
            applicationReleaseDate
            }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <Notifications color="blue" top right fadeFrom="bottom left" />
    <v-btn text icon rounded @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon v-if="$vuetify.theme.dark">mdi-brightness-4</v-icon>
      <v-icon v-else>mdi-brightness-7</v-icon>
    </v-btn>
  </div>
</template>
<script lang="js">
export default {

  components: {
    Notifications: () => import("@/components/Notifications.vue"),
    AboutModal: () => import("./AboutModal.vue"),
    // FeedbackDialog: () => import("./FeedbackModal.vue"),
    HelpModal: () => import("./HelpModal.vue"),
    LanguageModal: () => import("./LanguageModal.vue"),
  },

  computed: {
    applicationReleaseDate() {
      return this.$store.state.applicationInfo.lastUpdate;
    },
    applicationVersion() {
      //return this.$store.state.applicationInfo.version;
      return this.$store.state.applicationInfo
        ? this.$store.state.applicationInfo.version
        : undefined;
    },
  },
  methods: {
    updateSelected(selectedItem) {
      console.log(selectedItem.code);
      this.appLanguage = selectedItem.code;
    },
     closeDialog(){
        // this.menu = false;
      }
  }
};
</script>
