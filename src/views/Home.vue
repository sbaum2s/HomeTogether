<template>
  <div class="home">
    <v-container>Dashboard</v-container>
    <h1 v-for="n in 40" :key="n">{{n}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
