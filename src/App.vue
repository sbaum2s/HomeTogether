<template>
  <v-app>
    <NavigationBar app />
    <NavigationDrawer app />
    <v-content class="pageContent ma-2">
      <router-view />
    </v-content>
    <Footer app disabled />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "App",

  components: {
    NavigationBar: () => import("@/components/App/NavigationBar.vue"),
    NavigationDrawer: () => import("@/components/App/NavigationDrawer.vue"),
    Footer: () => import("@/components/App/Footer.vue"),
  },

  data() {
    return {};
  },
  computed: {
    applicationVersion() {
      return this.$store.state.applicationInfo.version;
    },
    applicationTitle() {
      return this.$store.state.applicationInfo.title;
    },
    ...mapState("auth", ["isLoggedIn"]),
  },
  created() {
    this.$store.dispatch("auth/autoLogin");
  },
});
</script>