<template>
  <div class="text-primary" id="app">
    <Header />
    <main id="main">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }

}
</script>

<style>
#app {
  font-family: sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100vw;
}
</style>
