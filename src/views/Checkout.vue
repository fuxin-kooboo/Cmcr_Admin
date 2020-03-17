<template>
  <div class="Checkout">
    checkout page
    <test/>
  </div>
</template>

<script>
import Test from './../components/Test.vue'
export default {
  name: 'checkout',
  components: {
    Test
  }
}
</script>

<style lang="scss">
  .Checkout {
    color: red;
  }
</style>
