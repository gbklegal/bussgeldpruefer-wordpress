<template>
  <div class="text-primary" id="app">
    <Header />
    <!-- TODO: Do we need lazy-load img -->
    <main id="main">
      <router-view/>
      <Badge />
      <BackToTop />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
import Badge from './components/TheBadge.vue'
import BackToTop from './components/TheBackToTop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Badge,
    BackToTop
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
  position: relative;
}

#nav .router-link-exact-active {
  background-color: #5CC8C5;
  color: #fff;
  padding: 0.25rem;
}

@media (min-width: 1300px) {
  #nav .router-link-exact-active {
    padding: 0.5rem;
  }
}

@media screen and (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>
