<template>
  <div>
    <testsolt>

      <!-- <template v-slot:test>
        <p>Here's some contact info</p>
      </template> -->
      <slot>&nbsp;</slot>
    </testsolt>
  </div>
</template>

<script>
import testsolt from '@/components/soltStudy'
export default {
  components:{
    testsolt
  }
}
</script>

<style>

</style>