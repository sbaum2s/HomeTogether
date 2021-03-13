<template>
  <div>
    <slot>
      <v-list :max-width="$attrs.width">
        <v-list-item
          dense
          :disabled="item.disabled"
          v-for="item in appLanguages"
          :key="item.code"
          @click="changeLanguage(item)"
        >
          <v-list-item-icon>
            <v-icon :color="!item.disabled ? $attrs.color : 'grey'"
              >mdi-web</v-icon
            >
          </v-list-item-icon>
          <v-list-item-title>{{ item.description }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </slot>
  </div>
</template>
<script lang="js">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      background: true,
      appLanguages: [
        {
          disabled: false,
          code: "en",
          description: "English"
        },
        {
          disabled: false,
          code: "de",
          description: "German"
        },
        {
          disabled: false,
          code: "pl",
          description: "Polish"
        },
      ]
    };
  },
  computed: {
    appLanguage: {
      get() {
        return this.$vuetify.framework.lang.locales;
      },
      set(e) {
        // https://stackoverflow.com/questions/51106931/accessing-vuetify-instance-property-from-vuex-store
        //console.log(Vuetify.framework)
        //Vuetify.framework.lang.locales = 'de' //language
        console.log(e);
        this.$vuetify.lang.current = e;
        //this.fetchProductEtim();
      }
    }
  },
  methods: {
    changeLanguage(lang) {
      console.log(lang.code);
      this.appLanguage = lang.code;
    },
  }
});
</script>