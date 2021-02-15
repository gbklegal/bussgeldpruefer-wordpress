<template>
  <div class="text-primary" id="app">
    <Header />
      <router-view/>
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
