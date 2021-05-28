<template>
  <div id="app">
    <Navbar/>
    <b-container>
      <Status/>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue'
import Status from '@/components/layouts/Status.vue'

export default {
  components: {
    Navbar,
    Status
  }
}
</script>

<style lang="scss">
.container {
  margin-top: 20px;
}

body {
  line-height: 1.5;
}
</style>
