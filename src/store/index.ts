import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') ?? null,
    user: JSON.parse(localStorage.getItem('user') ?? '{}'),
    cupcakes: null,
    ingredients: null,
    errors: null
  },

  mutations: {
    SET_USER_DATA(state, data) { 
      state.token = data.token
      localStorage.setItem('token', data.token)
      state.user = data.user
      localStorage.setItem('user', JSON.stringify(data.user))
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    },

    CLEAR_USER_DATA(state) {
      state.cupcakes = null
      state.token = null
      localStorage.removeItem('token')
      state.user = null
      localStorage.removeItem('user')
    },

    SET_ERROR_MESSAGES(state, errors) {
      state.errors = errors
    },

    SET_USER_CUPCAKES(state, cupcakes) {
      state.cupcakes = cupcakes
    },

    SET_INGREDIENTS(state, ingredients) {
      state.ingredients = ingredients
    },
  },

  actions: {
    login( { commit }, credentials) {
      return axios.post('login', credentials)
        .then( response => {
          commit('SET_USER_DATA', response.data)
          router.push('/dashboard')
        })
    },

    logout({ commit }) {
      commit('CLEAR_USER_DATA')
      router.push('/')
      location.reload()
    },

    register( { commit }, user ) {
      return axios.post('/register', user)
        .then( response => {
          commit('SET_USER_DATA', response.data)
          router.push('/dashboard')
          location.reload()
        }).catch(error => commit('SET_ERROR_MESSAGES', error.response.data.errors))
    },

    getUserCupcakes( { commit, state } ) {
      return axios.get(`/cupcakes/user/${state.user.id}`)
        .then( response => {
          commit('SET_USER_CUPCAKES', response.data)
        })
    },

    getIngredients( { commit } ) {
      return axios.get('/ingredients')
        .then( response => {
          commit('SET_INGREDIENTS', response.data)
        })
    },

    createCupcake( { commit, state }, cupcake: any ) {
      let newCupcake = { ...cupcake, user_id: state.user.id }
      return axios.post('/cupcakes/create', newCupcake )
        .then(() => {
          router.push('/')
          location.reload()
        }).catch( error => console.error(error) )
    }
  },

  getters: {
    loggedIn(state) {
      return !!state.token
    },

    errors(state) {
      return state.errors
    },

    user(state) {
      return state.user
    },

    cupcakes(state) {
      return state.cupcakes
    },

    ingredients(state) {
      return state.ingredients
    }
  }
})
