<template>
  <div class="process">
    <div class="container">
        <h1 class="text-center text-4xl md:text-left md:text-5xl font-light mb-6">Wie funktioniert's</h1>
        <section class="mb-6" v-for="step in steps" :key="step.id">
          <!-- TODO: Problem with Images -->
          <img :src="step.image.src" :alt="step.image.alt">
          <h2 class="text-center md:text-left font-medium text-secondary mb-5 text-3xl md:text-4xl">{{ step.title }}</h2>
          <div v-html="step.text"></div>
        </section>
    </div>
    <Warrants />
  </div>
</template>
<script>
import stepsData from '../assets/data/process-steps.json'
import Warrants from '../components/BasicWarrants.vue'

export default {
  name: 'Process',
  components: {
    Warrants,
  },
  data() {
    return {
      steps: stepsData,
    }
  }
}
</script>
<style scoped>

</style>