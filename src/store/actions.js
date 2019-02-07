import axios from 'axios'

const fetchBooks = (commit) => {
  axios
    .get(`https://api.jsonbin.io/b/5c52a1be15735a25423d3540`)
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
}

const removeBookFromCarts = (commit, payload) => {
  commit('REMOVE_BOOK_FROM_CARTS', payload)
}

export default {
  fetchBooks,
  addToCarts,
  removeBookFromCarts
}
