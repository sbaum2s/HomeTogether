<template>
  <v-app-bar
    id="app-bar"
    app
    color="primary"
    :clipped="clipped"
    :elevate-on-scroll="elevateOnScroll"
    :hide-on-scroll="hideOnScroll"
    extended
    :height="$vuetify.breakpoint.lgAndUp ? '110' : '70'"
    :extension-height="$vuetify.breakpoint.lgAndUp ? '60' : '70'"
  >
    <v-container fluid fill-height pa-0 class="containerSize">
      <!--router-link :to="{ name: 'Home' }">
        <v-img
          alt="logo klein"
          class="shrink mt-1 hidden-lg-and-up"
          contain
          max-width="90"
          src="@/assets/logo.png"
          width="120"
        />
        <v-img
          alt="logo groß"
          class="shrink py-2 hidden-md-and-down"
          contain
          max-width="90"
          src="@/assets/logo.png"
          width="188"
        />
      </router-link-->
      <v-spacer />
      <h1>{{ applicationTitle }}</h1>
      <v-spacer />
    </v-container>
    <template #extension>
      <v-container fluid fill-height pa-0 class="containerSize">
        <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
          <v-icon v-if="drawer">mdi-menu-open</v-icon>
          <v-icon v-else>mdi-menu</v-icon>
        </v-btn>

        <v-toolbar-title
          class="hidden-sm-and-down font-weight-light"
          v-text="$route.name"
        />

        <v-spacer />

        <!-- <v-text-field :label="('')" placeholder="Search" hide-details style="max-width: 165px;">
          <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:append-outer>
            <v-btn class="mt-n2" elevation="1" fab small>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>-->

        <section>
          {{ activeUser.username }}
          <router-link to="/login" v-if="!isLoggedIn">
            <v-icon>mdi-login</v-icon>
          </router-link>
          <a href="#" v-if="isLoggedIn" @click="logout">
            <v-icon>mdi-logout</v-icon>
          </a>
        </section>

        <div class="mx-3" />

        <v-btn class="ml-2" min-width="0" text to="/">
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>

        <Notifications bottom left fadeFrom="top right" color="red" />

        <v-btn class="ml-2" min-width="0" text to="/user">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-container>
    </template>
  </v-app-bar>
</template>

<script>
// Components
// import { VHover, VListItem } from "vuetify/lib";

// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  components: {
    Notifications: () => import("@/components/Notifications.vue"),
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    clipped: true, // this.$vuetify.breakpoint.mdAndUp,
    elevateOnScroll: true,
    hideOnScroll: true,
  }),

  computed: {
    ...mapState("dashboard", ["drawer"]),
    applicationVersion() {
      return this.$store.state.applicationInfo.version;
    },
    applicationTitle() {
      return this.$store.state.applicationInfo.title;
    },
    ...mapState("auth", ["isLoggedIn"]),
    ...mapState("auth", ["activeUser"]),
  },

  methods: {
    ...mapMutations({
      setDrawer: "dashboard/SET_DRAWER",
    }),
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
        console.log("Logged out.");
      });
    },
  },
};
</script>
