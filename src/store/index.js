import Vue from 'vue'
import Vuex from 'vuex'
import User from './models/user'
import Department from './models/department'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
  modules: {
    User,
    Department
  }
})
