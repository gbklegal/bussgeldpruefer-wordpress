<template>
  <div class="faq">
    <div class="container">
      <h1 class="text-4xl md:text-5xl font-light mb-6">FAQ - Häufig gestellte Fragen</h1>
      <!-- TODO: search /https://www.youtube.com/watch?v=G34_yNV8FMY, https://www.youtube.com/watch?v=o8UspKnsV_0&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=36 -->

      <details v-for="faq in faqs" :key="faq.id">
      <!-- TODO: svg via background image, but it is not displayed -->
        <summary v-on:click="faqOpen = !faqOpen" class="flex items-center">
          <svg v-if="!faqOpen" class="mr-2 w-7 bg-white text-secondary rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
          <svg v-if="faqOpen" class="w-7 mr-2 bg-white text-secondary rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
          {{ faq.title }}
        </summary>
        <div v-html="faq.text" class="p-2"></div>
      </details>
    </div>
  </div>
</template>
<script>
import faqData from '../assets/data/faq-data.json'

export default {
  name: 'FAQ',
  data() {
    return {
      faqs: faqData,
      faqOpen: false,
    }
  },
}
</script>