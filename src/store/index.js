import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connection: {
      socket: {},
      status: 0,
      addr: '/',
      message: 'Connecting'
    }
  },
  mutations: {
    conn_status (state, payload) {
      state.connection.addr = payload.addr
      state.connection.status = payload.status
      state.connection.message = payload.message
    }
  },
  actions: {
  },
  modules: {
  }
})
