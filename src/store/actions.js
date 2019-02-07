import axios from 'axios'

const fetchBooks = (commit) => {
  axios
    .get(process.env.VUE_APP_END_POINT)
    .then(response => {
      const payload = response.data.books
      commit('FETCH_BOOK', payload)
    })
    .catch(error => {
      console.log(error)
    })
}

const addToCarts = (commit, payload) => {
  commit('ADD_TO_CARTS', payload)
  commit('CALCULATE_BILL', payload)
}

const removeBookFromCarts = (commit, payload) => {
  commit('REMOVE_BOOK_FROM_CARTS', payload)
  commit('CALCULATE_BILL', payload)
}

const inputCash = (commit, payload) => {
  const value = payload.target.value
  commit('INPUT_CASH', value)
  commit('CALCULATE_BILL', payload)
}

const calculateBill = (commit) => {
  commit('CALCULATE_BILL')
}

const clearState = (commit) => {
  commit('CLEAR_STATE')
}

export default {
  fetchBooks,
  addToCarts,
  removeBookFromCarts,
  inputCash,
  calculateBill,
  clearState
}
