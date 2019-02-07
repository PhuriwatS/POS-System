import _ from 'lodash'
import { generateDiscount } from '../lib/general'
import { initialState } from './store'

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
  state.bill.subtotal += Number(payload.price)
}

const REMOVE_BOOK_FROM_CARTS = (state, payload) => {
  const carts = state.carts
  const data = carts.filter(cv => cv.id !== payload.id)
  const removebook = carts.find(cv => cv.id === payload.id)
  state.carts = data
  state.bill.subtotal -= (Number(removebook.price) * Number(removebook.quantity))
}

const INPUT_CASH = (state, payload) => {
  state.bill.cash = payload
}

const CALCULATE_BILL = (state) => {
  const carts = state.carts
  const { subtotal, cash } = state.bill
  const discountPercentage = generateDiscount(carts)
  const discountAmount = (subtotal * discountPercentage) / 100
  const total = subtotal - discountAmount
  const change = (cash - total).toFixed(2) * 1
  state.bill.discountPercentage = discountPercentage
  state.bill.discountAmount = discountAmount
  state.bill.total = total
  state.bill.change = change
}

const CLEAR_STATE = (state) => {
  const defaultState = _.omit(initialState(), ['books'])
  Object.keys(defaultState).forEach(key => {
    state[key] = defaultState[key]
  })
}

export default {
  FETCH_BOOK,
  ADD_TO_CARTS,
  REMOVE_BOOK_FROM_CARTS,
  INPUT_CASH,
  CALCULATE_BILL,
  CLEAR_STATE
}
