<template>
  <div class='calculation-container'>
    <div class='calculation-detail'>
      <p><span>Subtotal:</span> {{ bill.subtotal }} Baht</p>
      <p><span>Discount:</span> ({{ bill.discountPercentage }}%) {{ bill.discountAmount }} Baht</p>
      <p><span>Total:</span> {{ bill.total }} Baht</p>
      <p><span>Cash:</span> <input type='number' v-model='bill.cash' @input='inputCash' /> Baht</p>
      <p><span>Change:</span> {{ bill.change }} Baht</p>
    </div>
    <div class='calculation-button'>
      <button @click='clearState'>Clear</button>
      <button @click='confirmBill'>Bill</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import actions from '../../store/actions.js'

export default {
  name: 'calculation',
  props: ['carts', 'bill'],
  methods: {
    ...mapMutations({
      inputCash: actions.inputCash,
      clearState: actions.clearState
    }),
    confirmBill () {
      if (this.bill.cash < this.bill.total) {
        this.$swal({
          title: 'Cash is not enough',
          type: 'error',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.$swal({
          title: 'Confirm Payment',
          type: 'question',
          showCancelButton: true,
          focusConfirm: false
        }).then(result => {
          if (result.value) {
            this.$swal({
              title: 'Success',
              type: 'success',
              showConfirmButton: false,
              timer: 1500
            })
            this.clearState()
          }
        })
      }
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
