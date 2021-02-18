<template>
  <div class="text-primary" id="app">
    <Header />
    <!-- TODO: Do we need lazy-load img -->
    <main id="main">
      <router-view/>
      <Badge />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
import Badge from './components/TheBadge.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Badge
  }

}
</script>

<style>
#app {
  font-family: 'Roboto' sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
}

#main {
  max-width: 100%;
}
</style>
