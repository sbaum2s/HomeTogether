<template>
  <div>
    <v-sheet height="64">
      <v-toolbar flat>
        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
          Heute
        </v-btn>

        <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn icon class="ma-2" @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>

        <v-toolbar-title> {{ getSelectedMonth }} </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
              <span>{{ weekdayText }}</span>
              <v-icon right> mdi-menu-down </v-icon>
            </v-btn>
          </template>
          <v-list v-for="(item, index) in weekdays" :key="index">
            <v-list-item
              @click="
                weekday = item.value;
                weekdayText = item.text;
              "
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
              <span>{{ typeToLabel[type] }}</span>
              <v-icon right> mdi-menu-down </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="type = 'day'">
              <v-list-item-title>Tag</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'week'">
              <v-list-item-title>Woche</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'month'">
              <v-list-item-title>Monat</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-sheet>

    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :now="today"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @click:event="showEvent"
        @click:more="viewDay"
        @click:date="viewDay"
        @change="getEvents"
      ></v-calendar>

      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        offset-x
      >
        <v-card color="grey lighten-4" min-width="350px" flat>
          <v-toolbar :color="selectedEvent.color" dark>
            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <span v-html="selectedEvent.details"></span>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="secondary" @click="selectedOpen = false">
              Schließen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-sheet>

    <v-btn
      color="primary"
      elevation="12"
      fab
      absolute
      bottom
      right
      @click="dialogAddEvent = !dialogAddEvent"
      ><v-icon>mdi-plus</v-icon></v-btn
    >
    <v-dialog v-model="dialogAddEvent" max-width="600px">
      <v-card>
        <v-row class="ma-0">
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="datePicker1"
              v-model="datePicker1"
              :close-on-content-click="false"
              :return-value.sync="dialogAddEventData.start"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dialogAddEventData.start"
                  label="Start Datum"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="today" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="datePicker1 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.datePicker1.save(today)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="datePicker2"
              v-model="datePicker2"
              :close-on-content-click="false"
              :return-value.sync="dialogAddEventData.end"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dialogAddEventData.end"
                  label="End Datum"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="today" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="datePicker2 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.datePicker2.save(today)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="timePicker1"
              v-model="timePicker1"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="dialogAddEventData.startTime"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dialogAddEventData.startTime"
                  label="Start Zeit"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="timePicker1"
                v-model="dialogAddEventData.startTime"
                full-width
                format="24hr"
                @click:minute="
                  $refs.timePicker1.save(dialogAddEventData.startTime)
                "
              ></v-time-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="timePicker2"
              v-model="timePicker2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="dialogAddEventData.endTime"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dialogAddEventData.endTime"
                  label="End Zeit"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="timePicker2"
                v-model="dialogAddEventData.endTime"
                full-width
                format="24hr"
                @click:minute="
                  $refs.timePicker2.save(dialogAddEventData.endTime)
                "
              ></v-time-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="dialogAddEventData.name"
              label="Betreff"
              prepend-icon="mdi-text-subject"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" align-self="center">
            <v-btn text @click="dialogColorPicker = !dialogColorPicker"
              >Labelfarbe</v-btn
            ><v-icon
              :color="colorPicker"
              @click="dialogColorPicker = !dialogColorPicker"
              >mdi-circle</v-icon
            >
            <v-dialog width="317px" v-model="dialogColorPicker">
              <v-color-picker
                v-model="colorPicker"
                v-if="dialogColorPicker"
                class="ma-2"
                :swatches="swatches"
                show-swatches
                hide-canvas
              ></v-color-picker>
              <v-btn @click="saveColorPicker">Auswählen</v-btn>
            </v-dialog>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">
            Erstellen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    type: "month",
    types: ["month", "week", "day"],
    typeToLabel: {
      month: "Monat",
      week: "Woche",
      day: "Tag",
    },
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [1, 2, 3, 4, 5, 6, 0],
    weekdayText: "Mo - So",
    weekdays: [
      { text: "Mo - So", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mo - Fr", value: [1, 2, 3, 4, 5] },
    ],
    value: "",
    events: [],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    today: new Date(Date.now()).toISOString().substr(0, 10),
    dialogAddEventData: {},
    dialogAddEvent: false,
    datePicker1: false,
    datePicker2: false,
    timePicker1: false,
    timePicker2: false,
    dialogColorPicker: false,
    colorPicker: "",
    swatches: [
      ["#FF0000", "#AA0000", "#550000"],
      ["#FFFF00", "#AAAA00", "#555500"],
      ["#00FF00", "#00AA00", "#005500"],
      ["#00FFFF", "#00AAAA", "#005555"],
      ["#0000FF", "#0000AA", "#000055"],
    ],
  }),
  methods: {
    // getEvents({ start, end }) {
    getEvents() {
      const events = [
        {
          name: "Laura's Geburtstag",
          details: "Laura wird heute 23 Jahre alt!",
          start: this.formatDate(new Date("2021-03-13 00:00")),
          end: this.formatDate(new Date("2021-03-13 23:59")),
          color: "#000",
          timed: false,
        },
      ];
      //   console.log(start, end);

      //   const min = new Date(`${start.date}T00:00:00`);
      //   const max = new Date(`${end.date}T23:59:59`);
      //   const days = (max.getTime() - min.getTime()) / 86400000;
      //   const eventCount = this.rnd(days, days + 20);

      //   for (let i = 0; i < eventCount; i++) {
      //     const allDay = this.rnd(0, 3) === 0;
      //     const firstTimestamp = this.rnd(min.getTime(), max.getTime());
      //     const first = new Date(firstTimestamp - (firstTimestamp % 900000));
      //     const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
      //     const second = new Date(first.getTime() + secondTimestamp);

      //     events.push({
      //       name: this.names[this.rnd(0, this.names.length - 1)],
      //       start: first,
      //       end: second,
      //       color: this.colors[this.rnd(0, this.colors.length - 1)],
      //       timed: !allDay,
      //     });
      //   }

      this.events = events;
    },
    addEvent(eventData) {
      console.log(eventData);
    },
    saveColorPicker() {
      this.dialogColorPicker = false;
      this.dialogAddEventData.color = this.colorPicker;
    },
    formatDate(date) {
      const today = new Date(
        date.getTime() - date.getTimezoneOffset() * 60 * 1000
      ).toISOString();

      const todayDate = today.substr(0, 10);
      const todayTime = today.substr(11, 8);

      console.log(todayTime);
      return `${todayDate} ${todayTime}`;
    },
    viewDay({ date }) {
      this.value = date;
      this.type = "day";
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    setToday() {
      this.value = new Date(Date.now()).toISOString().substr(0, 10);
    },
  },
  computed: {
    getSelectedMonth() {
      const monthNames = [];
      monthNames[0] = "Januar";
      monthNames[1] = "Februar";
      monthNames[2] = "März";
      monthNames[3] = "April";
      monthNames[4] = "Mai";
      monthNames[5] = "Juni";
      monthNames[6] = "July";
      monthNames[7] = "August";
      monthNames[8] = "September";
      monthNames[9] = "Oktober";
      monthNames[10] = "November";
      monthNames[11] = "Dezember";

      return (
        monthNames[new Date(this.value).getMonth()] +
        " " +
        new Date(this.value).getFullYear()
      );
    },
  },
  mounted() {
    this.value = new Date(Date.now()).toISOString().substr(0, 10);
  },
};
</script>