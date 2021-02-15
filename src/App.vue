<template>
  <div id="app" class="text-primary">
    <Header />
  </div>
</template>

<script>
import Header from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
