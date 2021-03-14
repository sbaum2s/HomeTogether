<template>
  <div class="home mx-auto" style="width: 80%">
    <v-row>
      <v-col cols="12">
        <v-card elevation="10" outlined style="max-height: 430px">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Chat</v-toolbar-title>
            <v-spacer />
            <v-icon v-if="chatToggle" @click="chatToggle = false"
              >mdi-arrow-down-drop-circle</v-icon
            >
            <v-icon v-if="!chatToggle" @click="chatToggle = true"
              >mdi-arrow-up-drop-circle</v-icon
            >
          </v-toolbar>
          <v-container v-if="chatToggle">
            <v-row class="pb-14" align="end">
              <v-col
                id="chatWindow"
                style="height: 250px; max-height: 250px; overflow-y: auto"
              >
                <div
                  v-for="(item, index) in chat"
                  :key="index"
                  :class="[
                    'd-flex flex-row align-center my-2',
                    item.from == 'Timo' ? 'justify-end' : null,
                  ]"
                >
                  <span v-if="item.from == 'Timo'" class="blue--text mr-3">{{
                    item.msg
                  }}</span>
                  <v-avatar
                    :color="item.from == 'Timo' ? 'indigo' : 'red'"
                    size="36"
                  >
                    <span class="white--text">{{ item.from[0] }}</span>
                  </v-avatar>
                  <span v-if="item.from != 'Timo'" class="blue--text ml-3">{{
                    item.msg
                  }}</span>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-container v-if="chatToggle">
            <v-container class="ma-0 pa-0">
              <v-row no-gutters>
                <v-col>
                  <div class="d-flex flex-row align-center">
                    <v-text-field
                      v-model="msg"
                      outlined
                      dense
                      placeholder="Hier fehlt noch deine Nachricht.."
                      append-icon="mdi-send"
                      @keypress.enter="send"
                      @click:append.prevent="send"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="7" md="7" sm="7">
        <v-card elevation="10" outlined>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Einkaufsliste</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Eintrag suchen.."
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar>

          <v-card-text>
            <span v-if="list.length == 0"
              >Einkaufeliste ist leer!
              <v-text-field
                v-model="newItem"
                label="Eintrag hinzufügen"
                append-icon="mdi-plus"
                class="mx-auto"
                style="width: 50%"
                @click:append.prevent="addItem()"
              ></v-text-field
            ></span>
            <v-data-table
              v-else
              :items="list"
              :headers="headers"
              :search="search"
              hide-default-header
              hide-default-footer
            >
              <template v-slot:[`item.actions`]="{ item }">
                <!--v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon-->
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
              <template v-slot:[`footer`]>
                <v-text-field
                  v-model="newItem"
                  label="Eintrag hinzufügen"
                  append-icon="mdi-plus"
                  class="mx-auto"
                  style="width: 50%"
                  @click:append.prevent="addItem()"
                ></v-text-field>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="5" sm="5">
        <v-card elevation="10" outlined class="mb-5">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Deine Favoriten</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span v-if="list.length == 0">Noch keine Lieblingsartikel =(</span>
            <v-data-table
              v-else
              :items="filteredFavorites"
              :headers="headersFavorite"
              sort-by="count"
              :sort-desc="true"
              :items-per-page="8"
              hide-default-footer
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small @click="addSuggestedItem(item)">mdi-plus</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

        <v-card elevation="10" outlined class="mb-5">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Zuletzt hinzugefügt</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span v-if="list.length == 0">Keine kürzlichen Artikel</span>
            <v-data-table
              v-else
              :items="recent"
              :headers="headers"
              :search="search"
              hide-default-header
              hide-default-footer
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small @click="addSuggestedItem(item)">mdi-plus</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogDelete" max-width="500px" persistent>
      <v-card>
        <v-card-title class="headline">
          Willst du wirklich diesen Eintrag löschen?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="closeDelete"
            >Abbrechen</v-btn
          >
          <v-btn color="red darken-1" text @click="deleteItemConfirm"
            >Löschen</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Einkaufsliste",
  data: () => ({
    newItem: "",
    search: "",
    rules: [(v) => v.length <= 20 || "Max 20 characters"],
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Actions", value: "actions", align: "end", sortable: false },
    ],
    headersFavorite: [
      {
        text: "Anz.",
        align: "start",
        sortable: false,
        value: "count",
      },
      {
        text: "Artikel",
        sortable: false,
        value: "name",
      },
      { text: "", value: "actions", align: "end", sortable: false },
    ],
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {
      name: "",
    },
    defaultItem: {
      name: "",
    },
    chatToggle: false,
    chat: [
      {
        from: "Anna",
        msg: "Guten Morgen =)",
      },
      {
        from: "Timo",
        msg: "Morgen :)",
      },
      {
        from: "Timo",
        msg: "Kannst du vilt. noch chips mitbringen?",
      },
      {
        from: "Anna",
        msg: "welche sorte soll ivh mitbringen?",
      },
    ],
    msg: null,
  }),
  components: {},
  methods: {
    send: function () {
      if (!this.msg) return;
      this.chat.push({
        from: "Timo",
        msg: this.msg,
      });
      this.msg = null;
      this.addReply();
    },
    addReply() {
      this.chat.push({
        from: "Anna",
        msg: "Okay",
      });
    },
    addItem() {
      this.$store.dispatch("shoppingList/addShoppingItem", {
        name: this.newItem,
      });
      this.newItem = "";
    },
    addSuggestedItem(item) {
      this.$store.dispatch("shoppingList/addShoppingItem", {
        name: item.name,
      });
    },
    deleteItem(item) {
      this.editedIndex = this.list.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.$store.dispatch("shoppingList/deleteShoppingItem", this.editedIndex);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
  computed: {
    ...mapState("shoppingList", {
      list: "shoppingItems",
      recent: "recentItem",
      favorite: "favoriteItems",
    }),
    filteredFavorites() {
      return this.favorite.filter((item) => {
        return item.count >= 3;
      });
    },
    chatWindowHeight() {
      return document.getElementById("chatWindow").scrollHeight;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    chat() {
      this.$nextTick(() => {
        const chatWindow = this.$el.querySelector("#chatWindow");
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
    },
  },
};
</script>
