<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-list-item dense v-on="on">
        <v-list-item-icon>
          <v-icon color="gray">mdi-help-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Hilfe</v-list-item-title>
      </v-list-item>
      <!-- <v-btn color="primary" dark v-on="on">Hilfe</v-btn> -->
    </template>
    <v-card>
      <v-card-title class="headline">Hilfe</v-card-title>
      <v-card-text>Keine Hilfe erstellt..</v-card-text>
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
      dialog: false
    };
  }
};
</script>
