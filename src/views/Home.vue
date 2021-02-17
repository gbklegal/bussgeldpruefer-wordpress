<template>
  <div class="home">
    <div class="header md:flex">
      <header class="m-3 md:w-3/5 grid content-center">
        <h1 class="text-5xl font-light mb-6">
          Du bist nur 2 Minuten davon entfernt, deinen Bußgeldbescheid anzufechten.
        </h1>
        <p>Hol dir jetzt die BussgeldPrüfer App, um eine unverbindliche Ersteinschätzung zu erhalten – komplett kostenlos.</p>
      </header>
      <section class="bg-primary p-3 my-1 text-white grid">
        <ul role="list" class="self-center justify-self-center">
          <li>Kostenlose Ersteinschätzung</li>
          <li>in 90 Sekunden zum Ergebnis</li>
          <li>Digital ausführbar</li>
        </ul>
        <img class="w-56 justify-self-center sm:justify-self-end" src="../assets/iphone-x-splashscreen.webp" alt="BussgeldPrüfer App auf einem Handy.">
        <p class="justify-self-center">überall - digital - verbunden</p>
      </section>
    </div>
    <BasicCTA title="Bußgeldbescheid erhalten?" subtitle="Punkte in Flensburg? Führerschein weg? Fahrverbot? MPU-Test? Geblitzt?" />
  </div>
</template>

<script>
import BasicCTA from '../components/BasicCTA.vue'

export default {
  name: 'Home',
  components: {
    BasicCTA,
  }
}
</script>

<style scoped>
  .header section {
    grid-template-areas:
      'ul'
      'img'
      'p ';
  }

  .header section ul {
    grid-area: ul;
  }

  .header section img {
    grid-area: img;
  }

  .header section p {
    grid-area: p;
  }

  li:before {
    content: "-";
    padding-right: 0.2em;
  }

  @media (min-width: 640px) {
    .header section {
      grid-template-areas:
        'ul img'
        'p p';
    }
  }
</style>
