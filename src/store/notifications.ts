/* eslint-disable */
const state = {
    items: [
        {
            "prefix": "Erstellt",
            "title": "Neuen Studenten",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "Admin",
            "description": "Neuer Student wurde erstellt",
            "unread": true,
        },
        {
            "prefix": "NEU",
            "title": "Update verfügbar",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "System",
            "description": "Update verfügbar",
            "unread": true,
        },
        {
            "prefix": "NEU",
            "title": "test3",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "Franz",
            "description": "Student bearbeitet",
            "unread": false,
        },
        {
            "prefix": "NEU",
            "title": "test4",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "Admin",
            "description": "Student bearbeitet",
            "unread": true,
        },
        {
            "prefix": "NEU",
            "title": "test5",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "Admin",
            "description": "Student bearbeitet",
            "unread": true,
        },
    ],
};

const actions = {
    PUSH({ commit }: any, payload: any) {
        commit("PUSH", payload)
    },
    CLEAR({ commit }: any) {
        commit("CLEAR")
    },
    DELETE({ commit }: any) {
        commit("DELETE")
    },
};
const mutations = {
    PUSH(state: any, payload: any) {
        state.items.push(payload);
    },
    CLEAR(state: any) { // Clear all items
        state.items = [];
    },
    DELETE(state: any, payload: any) { // TODO : delete Single item
        state.items[payload] = [];
    },
};
// const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
