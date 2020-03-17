<template>
  <div class="NoFound">
    404 page
    <test/>
  </div>
</template>

<script>
import Test from './../components/Test.vue'
export default {
  name: 'no-found',
  components: {
    Test
  }
}
</script>

<style lang="scss">
  .NoFound {
    color: red;
  }
</style>
