import store from '.';

/* eslint-disable */
const state = {
	users: [
		{
			"id": "0",
			"username": "Timo",
			"password": "admin1234",
			"email": "admin@mail.de",
			"birthdate": "1995-06-22",
			"lastLoginToken": ""
		},
		{
			"id": "1",
			"username": "test",
			"password": "test1234",
			"email": "test@mail.de",
			"birthdate": "1995-06-22",
			"lastLoginToken": ""
		}
	],
	errorUsername: "",
	errorPassword: "",
	pending: false,
	activeUser: [],
	isLoggedIn: !!localStorage.getItem("token") || null
};

const actions = {
	login({ commit }: any, creds: any) {
		commit("LOGIN"); // show spinner
		const getUser = state.users.find(user => user.username === creds.username)
		if (getUser) {
			if (getUser.password === creds.password) {
				return new Promise(resolve => {
					setTimeout(() => {
						commit("LOGIN_SUCCESS", getUser);
					}, 2000);
				});
			} else {
				return commit("ERROR_PASSWORD");
			}
		} else {
			return commit("ERROR_USERNAME");
		}
	},
	autoLogin({ commit }: any) {
		const autoLoginUser = state.users.find(user => user.username === localStorage.getItem("token")?.split("-")[0])

		if (autoLoginUser)
			return new Promise(resolve => {
				commit("LOGIN_SUCCESS", autoLoginUser);
				console.log("AutoLogin successful.");

			});
	},
	logout({ commit }: any) {
		localStorage.removeItem("token");
		commit("LOGOUT");
	},
	clear({ commit }: any) {
		commit("CLEAR_ERRORS");
	}
};

const mutations = {
	LOGIN(state: any) {
		state.pending = true;
	},
	LOGIN_SUCCESS(state: any, payload: any) {
		const loginToken = payload.username + "-" + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
		state.users[0].lastLoginToken = loginToken;
		localStorage.setItem("token", loginToken);

		state.isLoggedIn = true;
		state.activeUser = payload
		state.pending = false;

	},
	LOGOUT(state: any) {
		state.isLoggedIn = false;
		state.activeUser = ""
	},
	ERROR_PASSWORD(state: any) {
		state.errorPassword = "Wrong Password"
	},
	ERROR_USERNAME(state: any) {
		state.errorUsername = "Username not found"
	},
	CLEAR_ERRORS(state: any) {
		state.errorUsername = "",
			state.errorPassword = ""
	}
};

const getters = {
	isLoggedIn: (state: any) => {
		return state.isLoggedIn
	}
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
};
