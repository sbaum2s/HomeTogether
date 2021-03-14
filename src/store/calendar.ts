import store from '.';

/* eslint-disable */
const state = {
	events: [
		{
			name: "Laura's Geburtstag",
			details: "Laura wird heute 23 Jahre alt!",
			start: "2021-03-13 00:00",
			end: "2021-03-13 23:59",
			color: "#0f2",
			timed: false,
		},
		{
			name: "Charles's Geburtstag",
			details: "Laura wird heute 23 Jahre alt!",
			start: "2021-03-13 00:00",
			end: "2021-03-13 23:59",
			color: "#0f0",
			timed: false,
		},
		{
			name: "Peter's Geburtstag",
			details: "Laura wird heute 23 Jahre alt!",
			start: "2021-03-15 00:00",
			end: "2021-03-16 23:59",
			color: "#00f",
			timed: false,
		},
	],
};

const actions = {
	addEvent({ commit }: any, payload: any) {
		commit("ADD_EVENT", payload)
	}
};

const mutations = {
	ADD_EVENT(state: any, payload: any) {
		state.events.push(payload)
	},
};

const getters = {
	todayEvents: (state: any) => {
		const today = new Date(Date.now()).toISOString().substr(0, 10)
		const events = state.events.filter((ev: { start: string; }) => ev.start.substr(0, 10) == today)
		return events
	},
	todayEventsCount: (state: any, getters: any) => {
		return getters.todayEvents.length
	},
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
};