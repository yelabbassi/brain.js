<template>
  <div id="app">
    <Navbar/>
    <transition
      name="slide-right"
      mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="sass">
</style>
