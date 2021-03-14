import store from '.';

/* eslint-disable */
const state = {
	shoppingItems: [
		{ name: "Bananen" },
		{ name: "Frischkäse" },
		{ name: "Kopfsalat" },
		{ name: "Cherry Tomaten" },
	],
	recentItem: [
		{ name: "Cherry Tomaten" }
	],
	favoriteItems: [
		{ name: "Cherry Tomaten", count: 4 },
		{ name: "Milchschnitte", count: 7 },
		{ name: "Milch", count: 2 },
	],
};

const actions = {
	addShoppingItem({ commit }: any, payload: any) {
		commit("ADD_ITEM", payload)
		commit("ADD_RECENT_ITEM", payload)
		commit("ADD_FAVORITE_ITEM", payload)
	},
	deleteShoppingItem({ commit }: any, payload: any) {
		commit("DELETE_ITEM", payload)
	}
};

const mutations = {
	ADD_ITEM(state: any, payload: any) {
		state.shoppingItems.push(payload)
	},
	ADD_RECENT_ITEM(state: any, payload: any) {
		if (state.recentItem.length >= 3) {
			state.recentItem.splice(0, 1)
			state.recentItem.push(payload)
		} else {
			state.recentItem.push(payload)
		}
	},
	ADD_FAVORITE_ITEM(state: any, payload: any) {
		const findItem = state.favoriteItems.find((item: { name: any; }) => item.name == payload.name)
		if (findItem) {
			const itemIndex = state.favoriteItems.indexOf(findItem)
			state.favoriteItems[itemIndex].count++
			console.log(itemIndex)
		}
		console.log(findItem)
	},
	DELETE_ITEM(state: any, payload: any) {
		console.log(payload)
		state.shoppingItems.splice(payload, 1)
	},
};

const getters = {};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
};