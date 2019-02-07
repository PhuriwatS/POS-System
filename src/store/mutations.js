const FETCH_BOOK = (state, payload) => {
  state.books = payload
}

const ADD_TO_CARTS = (state, payload) => {
  const carts = state.carts
  const isInCart = carts.some(cv => cv.id === payload.id)
  let data = payload
  if (isInCart) {
    data = carts.map(cv => {
      if (cv.id === payload.id) {
        cv.quantity += 1
      }
      return cv
    })
    state.carts = data
  } else {
    data = { ...payload, quantity: 1 }
    state.carts = [...carts, data]
  }
}

const REMOVE_BOOK_FROM_CARTS = (state, payload) => {
  const carts = state.carts
  const data = carts.filter(cv => cv.id !== payload.id)
  state.carts = data
}

export default {
  FETCH_BOOK,
  ADD_TO_CARTS,
  REMOVE_BOOK_FROM_CARTS
}
