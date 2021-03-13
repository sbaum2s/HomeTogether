<template>
  <LanguageList width="800" color="red" />
</template>
<script lang="js">
import Vue from "vue";

export default Vue.extend({

  components: {
    LanguageList: () => import("@/components/LanguageChooser.vue"),
  },
  });
</script>