import store from '.';

/* eslint-disable */
const state = {
	events: [
		{
			name: "Lara's Geburtstag",
			details: "Lara wird heute 23 Jahre alt!",
			start: "2021-03-13 00:00",
			end: "2021-03-13 23:59",
			color: "#007b10",
			timed: false,
		},
		{
			name: "Charles's Geburtstag",
			details: "Charle's wird heute 31 Jahre alt!",
			start: "2021-03-14 00:00",
			end: "2021-03-14 23:59",
			color: "#0ff",
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
		{
			name: "Coding Weekend",
			details: "AnyDesk Coding Weekend - 24h Programmieren :D",
			start: "2021-03-13 11:00",
			end: "2021-03-14 16:00",
			color: "#00f",
			timed: false,
		},
		{
			name: "Graue Tonne",
			details: "Graue Tonne wird geleert",
			start: "2021-03-02 07:00",
			end: "2021-03-02 10:00",
			color: "#c1c1c1",
			timed: false,
		},
		{
			name: "Graue Tonne",
			details: "Graue Tonne wird geleert",
			start: "2021-03-09 07:00",
			end: "2021-03-09 10:00",
			color: "#c1c1c1",
			timed: false,
		},
		{
			name: "Graue Tonne",
			details: "Graue Tonne wird geleert",
			start: "2021-03-16 07:00",
			end: "2021-03-16 10:00",
			color: "#c1c1c1",
			timed: false,
		},
		{
			name: "Graue Tonne",
			details: "Graue Tonne wird geleert",
			start: "2021-03-23 07:00",
			end: "2021-03-23 10:00",
			color: "#c1c1c1",
			timed: false,
		},
		{
			name: "Graue Tonne",
			details: "Graue Tonne wird geleert",
			start: "2021-03-30 07:00",
			end: "2021-03-30 10:00",
			color: "#c1c1c1",
			timed: false,
		},
		{
			name: "Blaue Tonne",
			details: "Blaue Tonne wird geleert",
			start: "2021-03-05 07:00",
			end: "2021-03-05 10:00",
			color: "#8a83ff",
			timed: false,
		},
		{
			name: "Blaue Tonne",
			details: "Blaue Tonne wird geleert",
			start: "2021-03-19 07:00",
			end: "2021-03-19 10:00",
			color: "#8a83ff",
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