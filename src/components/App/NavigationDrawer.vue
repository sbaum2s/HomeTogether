<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    width="20%"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>
    <v-divider class="mb-1" />

    <v-list nav>
      <v-list-item>
        <v-list-item-avatar class="align-self-center" contain>
          <v-img src="https://randomuser.me/api/portraits/men/81.jpg" />
          <!-- <v-img src="@/assets/logo.png" /> -->
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            v-if="!isLoggedIn"
            class="display-1 text-no-wrap"
            v-text="profile.title"
          />
          <v-list-item-title
            v-else
            class="display-1 text-no-wrap"
            v-text="activeUser.username"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <!-- <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          ...
        </base-item-group>
vuetify-material-dashboard-master\src\components\base\Item.vue
C:\Users\wiesner\GIT\2004-al-bewerberprozess\vuetify-material-dashboard-master\src\components\base\Item.vue
        <base-item v-else :key="`item-${i}`" :item="item" />-->
        <v-list-item
          :key="`item-${i}`"
          :item="item"
          :to="item.to"
          :active-class="`primary ${
            $vuetify.theme.dark ? 'black' : 'white'
          }--text`"
        >
          <v-list-item-icon
            v-if="item.text"
            class="v-list-item__icon--text"
            v-text="computedText"
          />
          <v-list-item-icon v-else-if="item.icon">
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content v-if="item.title || item.subtitle">
            <v-list-item-title v-text="item.title" />

            <v-list-item-subtitle v-text="item.subtitle" />
          </v-list-item-content>
        </v-list-item>
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

    <AppSettings />
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "DashboardCoreDrawer",
  components: {
    AppSettings: () => import("@/components/App/settingsMenu/index.vue"),
  },
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [], // Main Data storage
  }),

  computed: {
    ...mapState("dashboard", ["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.dashboard.drawer;
      },
      set(val) {
        this.$store.commit("dashboard/SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: "Peter",
      };
    },
    ...mapState("auth", ["isLoggedIn"]),
    ...mapState("auth", ["activeUser"]),
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: item.title,
      };
    },
    getDrawerItems() {
      this.items = this.$store.state.dashboard.items;
    },
  },
  mounted() {
    this.getDrawerItems();
  },
};
</script>

<style scoped>
#core-navigation-drawer {
  min-width: 250px;
}
</style>