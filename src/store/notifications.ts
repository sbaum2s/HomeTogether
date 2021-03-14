/* eslint-disable */
const state = {
    items: [
        {
            "prefix": "Erstellt",
            "title": "Einkaufsliste aktualisiert",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "Mama",
            "description": "Mama hat etwas der Einkaufsliste hinzugefügt.",
            "unread": true,
        },
        {
            "prefix": "NEU",
            "title": "Ungelesene Nachricht",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "System",
            "description": "Du hast 1 ungelesene Chat Nachricht",
            "unread": true,
        },
        {
            "prefix": "TERMIN",
            "title": "Termin Erinnerung",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "System",
            "description": "Erinnerung für Termin: Lara's Geburtstag",
            "unread": true,
        },
        {
            "prefix": "Erstellt",
            "title": "Einkaufsliste aktualisiert",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "Mama",
            "description": "Mama hat etwas der Einkaufsliste hinzugefügt.",
            "unread": false,
        },
        {
            "prefix": "Erstellt",
            "title": "Einkaufsliste aktualisiert",
            "modifiedAt": (new Date()).toLocaleString("de-DE"),
            "modifiedBy": "Lara",
            "description": "Lara hat etwas der Einkaufsliste hinzugefügt.",
            "unread": false,
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
