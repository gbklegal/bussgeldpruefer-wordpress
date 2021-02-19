<template>
  <div class="process">
    <div class="container">
        <h1 class="text-center text-4xl md:text-left md:text-5xl font-light mb-6">Wie funktioniert's</h1>
        <section class="mb-6 grid" v-for="step in steps" :key="step.id">
          <!-- TODO: Problem with Images -->
          <!-- TODO: change Json file -->
          <img :src="step.image.src" :alt="step.image.alt">
          <h2 class="font-medium text-secondary mb-5 text-3xl md:text-4xl">{{ step.title }}</h2>
          <div class="process-text" v-html="step.text"></div>
        </section>
    </div>
    <CTA title="Kostenlose Prüfung ob sich ein Einspruch gegen Deinen Bußgeldbescheid lohnt." />
    <Warrants />
  </div>
</template>
<script>
import stepsData from '../assets/data/process-steps.json'
import Warrants from '../components/BasicWarrants.vue'
import CTA from '../components/BasicCTA.vue'

export default {
  name: 'Process',
  components: {
    Warrants,
    CTA,
  },
  data() {
    return {
      steps: stepsData,
    }
  }
}
</script>
<style scoped>
  @media (min-width: 640px) {
    section {
      grid-template-areas:
        'img title'
        'img text';

      grid-template-columns: auto 1fr;
    }

    img {
      grid-area: img;
      align-self: center;
      margin-right: 2em;
    }

    h2 {
      grid-area: title;
    }

    .process-text {
      grid-area: text;
    }
  }
</style>