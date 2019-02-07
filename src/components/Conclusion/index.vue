<template>
  <div class='conclusion-container'>
    <span>Cart</span>
    <Cart :carts='carts' />
    <Calculation :carts='carts' :bill='bill' />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import getters from '../../store/getters.js'
import Cart from '../Cart'
import Calculation from '../Calculation'

export default {
  name: 'conclusion',
  components: { Cart, Calculation },
  computed: {
    ...mapState({
      carts: getters.getCarts,
      bill: getters.getBill
    })
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
