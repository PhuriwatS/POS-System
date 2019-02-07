<template>
  <div class='calculation-container'>
    <div class='calculation-detail'>
      <p><span>Subtotal:</span> {{ subtotal }}</p>
      <p><span>Discount:</span> {{ msg }}</p>
      <p><span>Total:</span> {{ msg }}</p>
      <p><span>Cash:</span> <input type='text' /></p>
      <p><span>Change:</span> {{ msg }}</p>
    </div>
    <div class='calculation-button'>
      <button>Clear</button>
      <button>Bill</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculation',
  props: ['carts'],
  data () {
    return {
      msg: 'Calculation',
      subtotal: 0
    }
  },
  watch: {
    carts: (newVal, oldVal) => {
      this.subtotal = newVal.reduce((init, cv) => {
        const price = Number(cv.price) * cv.quantity
        return init + price
      }, 0)
      console.log('this.subtotal', this.subtotal)
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
