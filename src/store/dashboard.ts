/* eslint-disable */
const state = {
    barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
    barImage:
        "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",
    drawer: null,
    items: [
        {
            icon: "mdi-view-dashboard",
            title: "Dashboard",
            to: "/"
        },
        {
            icon: "mdi-account",
            title: "Benutzer",
            to: "/user"
        },
        {
            title: "Kalender",
            icon: "mdi-calendar",
            to: "/calendar"
        },
        {
            title: "Einkaufsliste",
            icon: "mdi-notebook",
            to: "/shopping-list"
        },
        {
            title: "Aufgabenplan",
            icon: "mdi-format-list-checks",
            to: "/task-plan"
        },
        {
            title: "empty",
            icon: "mdi-map-marker",
            to: "/test"
        },
        {
            title: "empty",
            icon: "mdi-bell",
            to: "/components/notifications"
        },
        {
            title: "empty",
            icon: "mdi-cog-transfer",
            to: "/durban"
        }
    ]
};

const mutations = {
    SET_BAR_IMAGE(state: any, payload: any) {
        state.barImage = payload;
    },
    SET_DRAWER(state: any, payload: any) {
        state.drawer = payload;
    },
};
const actions = {};
const getters = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
