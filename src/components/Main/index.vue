<template>
  <div class='main-container'>
    <div class='main-left'>
      <Shelf />
    </div>
    <div class='main-right'>
      <Conclusion />
    </div>
  </div>
</template>

<script>
import Shelf from '../Shelf'
import Conclusion from '../Conclusion'

export default {
  components: { Shelf, Conclusion }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
