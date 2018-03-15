import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'
import dict from './modules/dict'

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
    permission,
    user,
    dict
  }
})

export default store
