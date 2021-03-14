<template>
  <div class="home">
    <v-row>
      <v-col cols="12" md="6" sm="6">
        <v-card elevation="6" class="my-3" outlined>
          <v-card-title>Hallo Timo,</v-card-title>
          <v-card-subtitle>wie war dein Tag heute?</v-card-subtitle>
        </v-card>

        <v-card elevation="6" class="my-3" outlined>
          <v-card-title>Deine Termine auf einem Blick!</v-card-title>
          <v-card-subtitle
            >Für Heute sind <strong>{{ todayEventsCount }}</strong> Termine
            vorgemerkt.</v-card-subtitle
          >
          <div v-for="(event, index) in todayEvents" :key="index" class="pb-3">
            <v-card elevation="6" class="mx-5" outlined>
              <v-card-title class="pt-0" style="font-size: 16px">{{
                event.name
              }}</v-card-title>
              <v-card-subtitle class="py-0" style="font-size: 12px">
                {{ new Date(event.start).toLocaleString() }}
              </v-card-subtitle>
              <v-card-text class="pb-0">{{ event.details }}</v-card-text>
            </v-card>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" sm="6">
        <v-card class="mx-auto my-3" elevation="6" outlined>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"> Essen </v-list-item-title>
              <v-list-item-subtitle
                >Sonntag, 14:30 Uhr, Meist sonnig</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="display-3" cols="6"> 23&deg;C </v-col>
              <v-col cols="6">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn text> Mehr Details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    invertHex(hex) {
      const convertString = hex.replace("#", "");
      const negative =
        "#" +
        (Number(`0x1${convertString}`) ^ 0xffffff).toString(16).toUpperCase();
      return negative;
    },
  },
  computed: {
    ...mapGetters({
      todayEvents: "calendar/todayEvents",
      todayEventsCount: "calendar/todayEventsCount",
    }),
  },
};
</script>
