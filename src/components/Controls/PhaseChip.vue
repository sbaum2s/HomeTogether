<template>
  <div>
    <v-chip-group v-bind:value="value" active-class="deep-purple accent-4 white--text" column>
      <v-chip
        x-small
        v-for="tag in tags"
        :key="tag.id"
        @click="changedChipEvent(tag.id)"
      >{{tag.name}}</v-chip>
    </v-chip-group>

    <!-- <hr />
    <v-chip
      v-for="tag in tags"
      :key="tag.id"
      v-model="tag.isOpen"
      @input="onClose(tag)"
      close
    >{{tag.name}}</v-chip>-->
  </div>
</template>

<script>
//  https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components

// https://themeforest.net/item/vuse-vuejs-cli-material-admin/22745288

export default {
  name: "TagIndex",
  props: ["value", "tags2"],
  data() {
    return {
      phase: null,
      dialog: false,
      tags: [
        { id: 0, isOpen: true, name: "Phase 1" },
        { id: 1, isOpen: true, name: "Phase 2" },
        { id: 2, isOpen: true, name: "Phase 3" },
        { id: 3, isOpen: true, name: "Phase 4" }
      ]
    };
  },
  methods: {
    changedChipEvent(val) {
      //console.log("changedPhase CLIENT", val);
      this.$emit("input", val);
    },

    onClose(tag) {
      console.log("close tag", tag);
    }
  }
};
</script>