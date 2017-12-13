import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions,
  getters,
  modules: {
    app,
    user,
    permission
  }
})

export default store
