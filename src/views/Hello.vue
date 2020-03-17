<template>
  <div class="Hello">
    hello page
    <test/>
  </div>
</template>

<script>
import Test from './../components/Test.vue'
export default {
  name: 'hello',
  components: {
    Test
  }
}
</script>

<style lang="scss">
  .Hello {
    color: red;
  }
</style>
