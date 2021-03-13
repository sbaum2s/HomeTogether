<template>
  <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="dateFormatted"
        :label="label"
        :hint="hint"
        persistent-hint
        :prepend-icon="PrependIcon"
        @blur="date = parseDate(dateFormatted)"
        v-on="on"
      ></v-text-field>
    </template>

    <v-date-picker v-bind:value="value" no-title @input="datePickerInputEvent"></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  props: {
    value: {},
    PrependIcon: {
      type: String,
      default: "" // "mdi-calendar-range"
    },
    label: {
      type: String,
      default: "" //"Datum"
    }
  },
  data: vm => ({
    date: null, //new Date().toISOString().substr(0, 10),
    dateFormatted: null, //vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    hint: "DD.MM.JJJJ"
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    age2() {
      if (!this.date) return "null";
      const dob = this.date;

      const year = Number(dob.substr(0, 4));
      const month = Number(dob.substr(4, 2)) - 1;
      const day = Number(dob.substr(6, 2));
      const today = new Date();
      let age = today.getFullYear() - year;
      if (
        today.getMonth() < month ||
        (today.getMonth() == month && today.getDate() < day)
      ) {
        age--;
      }
      return age.toString() + " Jahre";
    }
  },

  watch: {
    date(val) {
      //      console.log(this.age2);
      if (this.label === "Geburtstag") this.hint = this.age2;

      this.dateFormatted = this.formatDate(this.date);
    },
    value(val) {
      // added by arnim um den v-bindhinzubekommen
      this.date = val;
    }
  },

  methods: {
    datePickerInputEvent(val) {
      this.menu1 = false;

      this.$emit("input", val);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}.${month}.${year}`;
      //return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split(".");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>