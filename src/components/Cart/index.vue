<template>
  <div class='cart-container'>
    <div class='cart-list'>
      <p class='cart-list_book' v-for='cart in carts' :key='cart.id'>
        <span>{{cart.quantity}}</span>
        <span>{{cart.title}}</span>
        <span>{{cart.price * cart.quantity}}</span>
        <span><img src='../../assets/images/trash.svg' alt='trash' @click='removeBookFromCarts(cart)' /></span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import actions from '../../store/actions.js'

export default {
  name: 'cart',
  props: ['carts'],
  methods: {
    ...mapMutations({
      removeBookFromCarts: actions.removeBookFromCarts
    })
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
