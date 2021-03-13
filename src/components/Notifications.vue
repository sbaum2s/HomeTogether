<template>
  <v-menu
    v-model="value"
    :disabled="$attrs.disabled"
    :absolute="absolute"
    :open-on-hover="openOnHover"
    :close-on-click="closeOnClick"
    :close-on-content-click="closeOnContentClick"
    :offset-x="offsetX"
    :offset-y="offsetY"
    :top="$attrs.top"
    :bottom="$attrs.bottom"
    :left="$attrs.left"
    :right="$attrs.right"
    :origin="$attrs.fadeFrom"
    transition="scale-transition"
  >
    <v-btn @click="addMessage()" />
    <template v-slot:activator="{ on }">
      <v-badge :content="messageCount" :value="hasMessages" :color="$attrs.color" overlap>
        <v-btn icon large v-if="hasMessages" v-on="on">
          <v-icon>mdi-bell-ring</v-icon>
        </v-btn>
        <v-btn icon large v-else>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-badge>
    </template>

    <v-list three-line>
      <v-list-item v-for="(item, index) in items" :key="index" @click="clickNotificationItem(item)">
        <div>
          <div avatar role="menuitem">
            <v-sheet
              class="mx-auto menuItem"
              min-height="90"
              width="450"
              :class="loadMessageReadState(item)"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <span class="font-weigth-black text-capitalize">
                    {{
                    item.modifiedBy
                    }}
                  </span>
                  <span class="pl-5">{{ item.modifiedAt }}</span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <span class="font-weigth-black">
                    {{
                    item.prefix + ": "
                    }}
                  </span>
                  <span>{{ item.title }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="text-capitalize">{{ item.description }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-sheet>
            <v-divider />
          </div>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [], // Main Data storage
      menuListHeight: "200px",
      testItem: {
        prefix: "NEU",
        title: "PUSHED!",
        modifiedAt: new Date().toLocaleString("de-DE"),
        modifiedBy: "Admin",
        description: "Student bearbeitet"
      },
      disabled: false,
      absolute: false,
      openOnHover: false,
      value: false,
      closeOnClick: true,
      closeOnContentClick: false,
      offsetX: false,
      offsetY: true
    };
  },
  computed: {
    messageCount() {
      return this.items.length;
    },
    hasMessages() {
      return this.messageCount > 0;
    }
  },
  methods: {
    loadMessageReadState(item) {
      let readState;
      if (!item.unread) {
        readState = "read";
      } else {
        readState = "unread";
      }
      return readState;
    },
    addMessage() {
      console.log(this.$store);
      this.$store.dispatch("notifications/PUSH", this.testItem);
      // this.items.push({ title: "Click Me" });
    },
    clearMessage(e) {
      this.$store.dispatch("notifications/CLEAR", e);
      this.items = this.$store.state.notifications;
    },
    markAsRead() {
      this.loading = true;
    },
    fetchNotifications() {
      this.items = this.$store.state.notifications.items;
    },
    clickNotificationItem(item) {
      item.unread = false;
      console.log("clickNotificationItem");
    }
  },
  created() {
    // console.log("component created");
  },
  mounted() {
    this.fetchNotifications();
    // console.log("notis", this.items.length);
  }
};
</script>

<style>
#notification-list {
  width: 100px;
  /* height: var(--menuListHeight); */
}
.unread {
  border: 3px solid red !important;
  background-color: rgba(255, 0, 0, 0.5) !important;
}
.read {
  border: 3px solid green !important;
  background-color: rgba(0, 255, 0, 0.5) !important;
}
/* .menuitem {
  height: v;
} */
</style>
