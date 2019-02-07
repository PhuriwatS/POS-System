import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export const initialState = () => {
  return {
    books: [],
    carts: [],
    bill: {
      subtotal: 0,
      discountPercentage: 0,
      discountAmount: 0,
      total: 0,
      cash: null,
      change: 0
    }
  }
}

export default new Vuex.Store({
  state: initialState,
  mutations,
  getters,
  actions
})
