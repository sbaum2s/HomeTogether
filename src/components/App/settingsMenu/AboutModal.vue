<template>
  <v-dialog v-model="dialog" persistent max-width="800">
    <template v-slot:activator="{ on }">
      <v-list-item dense v-on="on">
        <v-list-item-icon>
          <v-icon color="gray">mdi-information</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Über</v-list-item-title>
      </v-list-item>

      <!-- <v-btn color="primary" dark v-on="on">Über</v-btn> -->
    </template>
    <v-card>
      <v-card-title class="headline">Über</v-card-title>
      <v-card-text>
        <v-list two-line>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          title: "ApplicationTitle",
          subtitle: process.env.VUE_APP_TITLE
        },
        {
          title: "ApplicationDescription",
          subtitle: process.env.VUE_APP_DESCRIPTION
        },
        {
          title: "ApplicationProductname",
          subtitle: process.env.VUE_APP_PRODUCTNAME
        },
        {
          title: "ApplicationCopyright",
          subtitle: process.env.VUE_APP_COPYRIGHT
        },
        {
          title: "ApplcationVersion",
          subtitle: process.env.VUE_APP_VERSION
        },
        {
          title: "ApplicationReleasedate",
          subtitle: process.env.VUE_APP_LASTUPDATE
        }
      ]
    };
  }
};
</script>
