<template>
  <div class='conclusion-container'>
    <span>Cart</span>
    <Cart :carts="carts" />
    <Calculation :carts="carts" />
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
      carts: getters.getCarts
    })
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
