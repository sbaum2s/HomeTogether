/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from "./dashboard";
import notifications from './notifications';
import auth from './auth';

Vue.use(Vuex)

// Do not enable strict mode when deploying for production!
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    debug: true,
    applicationInfo: {
      title: process.env.VUE_APP_TITLE,
      version: process.env.VUE_APP_VERSION,
      lastUpdate: process.env.VUE_APP_LASTUPDATE,
    },
    packageJson: JSON.parse(unescape(process.env.PACKAGE_JSON || '%7B%7D'))
  },
  getters: {
    getApplicationInfoTitle: (state) => {
      return state.applicationInfo.title;
    },
    packageJson: (state) => {
      return state.packageJson;
    },
  },
  actions: {
    generate: (store) => {
      console.log(store.state.applicationInfo.lastUpdate);
    },
  },
  mutations: {
  },
  modules: {
    dashboard,
    notifications,
    auth,
  },
  strict: debug, //,  plugins: debug ? [createLogger()] : []
});
