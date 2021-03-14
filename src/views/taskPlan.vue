<template>
  <div class="home mx-auto" style="max-width: 920px">
    <v-row align="end" id="planner-header-row">
      <v-col class="text-center pb-0" style="max-width: 36%"
        ><v-img src="@/assets/taskplan-header.jpg" />
      </v-col>
      <v-col class="text-center pb-0" style="max-width: 12%"></v-col>
      <v-col class="text-center pb-0" style="max-width: 49%"
        ><v-img src="@/assets/taskplan-header-side.jpg"
      /></v-col>
    </v-row>
    <v-row align="end" id="planner-header-row">
      <v-col class="text-center pb-0" style="max-width: 11%">Name</v-col>
      <v-col class="text-center pb-0" style="max-width: 25%"> Aufgabe </v-col>
      <v-col class="text-center pb-0" style="max-width: 12%">
        <span class="vert-text-label">
          <p class="ma-0">Täglich</p>
          <p class="ma-0 py-3">1X PRO WOCHE</p>
          <p class="ma-0">2X PRO WOCHE</p>
        </span>
      </v-col>
      <v-col class="text-center pb-0" style="max-width: 7%"> Mo </v-col>
      <v-col class="text-center pb-0" style="max-width: 7%"> Di </v-col>
      <v-col class="text-center pb-0" style="max-width: 7%"> Mi </v-col>
      <v-col class="text-center pb-0" style="max-width: 7%"> Do </v-col>
      <v-col class="text-center pb-0" style="max-width: 7%"> Fr </v-col>
      <v-col class="text-center pb-0" style="max-width: 7%"> Sa </v-col>
      <v-col class="text-center pb-0" style="max-width: 7%"> So </v-col>
    </v-row>
    <v-row v-for="n in 10" :key="n">
      <v-col class="text-center py-0" style="max-width: 11%">
        <v-text-field></v-text-field>
      </v-col>
      <v-col class="text-center py-0" style="max-width: 25%">
        <v-text-field></v-text-field>
      </v-col>
      <v-col
        class="planner-checkbox planner-check-quantity text-center py-0"
        style="max-width: 12%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
      </v-col>
      <v-col
        class="planner-checkbox planner-check-mo text-center py-0 px-0"
        style="max-width: 7%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox
      ></v-col>
      <v-col
        class="planner-checkbox planner-check-di text-center py-0 px-0"
        style="max-width: 7%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox
      ></v-col>
      <v-col
        class="planner-checkbox planner-check-mi text-center py-0 px-0"
        style="max-width: 7%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox
      ></v-col>
      <v-col
        class="planner-checkbox planner-check-do text-center py-0 px-0"
        style="max-width: 7%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox
      ></v-col>
      <v-col
        class="planner-checkbox planner-check-fr text-center py-0 px-0"
        style="max-width: 7%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox
      ></v-col>
      <v-col
        class="planner-checkbox planner-check-sa text-center py-0 px-0"
        style="max-width: 7%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox
      ></v-col>
      <v-col
        class="planner-checkbox planner-check-so text-center py-0 px-0"
        style="max-width: 7%"
      >
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          class="d-inline-block"
          color="blue"
          value="red"
          hide-details
          style="width: 28px"
        ></v-checkbox
      ></v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapGetters } from "vuex";

export default {
  name: "Aufgabenplan",
  components: {},
  methods: {},
  computed: {},
};
</script>
<style>
#planner-header-row {
  font-size: 24px;
  font-weight: bold;
}
.vert-text-label {
  display: block;
  transform: rotate(-90deg);
  font-size: 12px !important;
  text-align: left;
}

.planner-checkbox .v-input .v-icon.v-icon {
  color: transparent;
  border-radius: 3px;
}
.planner-check-quantity .v-icon.v-icon {
  background-color: #c1c1c1;
}

.planner-check-mo .v-input .v-icon.v-icon {
  background-color: #fdeec7;
}
.planner-check-di .v-input .v-icon.v-icon {
  background-color: #fde2cd;
}
.planner-check-mi .v-input .v-icon.v-icon {
  background-color: #fccfd2;
}
.planner-check-do .v-input .v-icon.v-icon {
  background-color: #eadce7;
}
.planner-check-fr .v-input .v-icon.v-icon {
  background-color: #d4e1f0;
}
.planner-check-sa .v-input .v-icon.v-icon {
  background-color: #d5f0f1;
}
.planner-check-so .v-input .v-icon.v-icon {
  background-color: #f0f3d8;
}

.planner-check-mo .v-input:nth-of-type(2) .v-icon.v-icon {
  background-color: #ffe3a7;
  border: 1px solid #8b5f00;
}
.planner-check-di .v-input:nth-of-type(2) .v-icon.v-icon {
  background-color: #ffd4b1;
  border: 1px solid #863c00;
}
.planner-check-mi .v-input:nth-of-type(2) .v-icon.v-icon {
  background-color: #fcb6b8;
  border: 1px solid #860004;
}
.planner-check-do .v-input:nth-of-type(2) .v-icon.v-icon {
  background-color: #a47f96;
  border: 1px solid #8a0055;
}
.planner-check-fr .v-input:nth-of-type(2) .v-icon.v-icon {
  background-color: #bed7ed;
  border: 1px solid #004785;
}
.planner-check-sa .v-input:nth-of-type(2) .v-icon.v-icon {
  background-color: #beeaed;
  border: 1px solid #007780;
}
.planner-check-so .v-input:nth-of-type(2) .v-icon.v-icon {
  background-color: #a2ec93;
  border: 1px solid #168300;
}
</style>
