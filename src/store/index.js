import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
		login: false,
		userdata: null
	},
  	mutations: {
		updateLogin(state, payload){
			state.login = payload
		},
		updateUserData(state, payload){
			state.userdata = payload
		}
  	},
  	actions: {
		updateLoginAction(context, payload){
			context.commit('updateLogin', payload)
		},
		updateUserDataAction(context, payload){
			context.commit('updateUserData', payload)
		}
  	},
  	modules: {

	},
	getters: {
		logged(state){
			return state.login
		},
		getUserData(state){
			return state.userdata
		}
	},
	plugins: [createPersistedState()]
})
