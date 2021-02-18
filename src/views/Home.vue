<template>
  <div class="home">
    <header class="md:flex">
      <div class="first-half md:w-2/4 px-3 flex">
        <div class="grid container-half h-full pt-11 pb-3 ml-auto content-center">
          <h1 class="text-center text-4xl md:text-left md:text-5xl font-light mb-6">
            Du bist nur 2 Minuten davon entfernt, deinen Bußgeldbescheid anzufechten.
          </h1>
          <p class="text-center md:text-left">Hol dir jetzt die BussgeldPrüfer App, um eine unverbindliche Ersteinschätzung zu erhalten – komplett kostenlos.</p>
        </div>
      </div>

      <div class="second-half bg-primary md:w-2/4 px-3 my-1 text-white">
        <div class="grid container-half pb-11 pt-3">
          <img class="w-56 justify-self-center sm:justify-self-end" src="../assets/img/iphone-x-splashscreen.webp" alt="BussgeldPrüfer App auf einem Handy.">
          <ul role="list" class="mb-3 md:mb-0 self-center justify-self-center">
            <li>Kostenlose Ersteinschätzung</li>
            <li>in 90 Sekunden zum Ergebnis</li>
            <li>Digital ausführbar</li>
          </ul>
          <p class="justify-self-center mt-4">überall - digital - verbunden</p>
        </div>
      </div>
    </header>

    <BasicCTA title="Bußgeldbescheid erhalten?" subtitle="Punkte in Flensburg? Führerschein weg? Fahrverbot? MPU-Test? Geblitzt?" />

    <section class="">
      <div class="container flex flex-col md:flex-row justify-center">
        <div class="mx-auto md:w-2/4">
          <h2 class="text-center md:text-left font-medium text-primary mb-5 text-3xl md:text-4xl md:mx-0">Mit dem BussgeldPrüfer fährst du richtig:</h2>
          <ul role="list" class="w-max mx-auto mb-5 md:mx-0">
            <li>Unverbindliche Ersteinschätzung in 90 Sekunden</li>
            <li>Kostenlose telefonische Beratung</li>
            <li>Schnelle Überprüfung Deiner Erfolgsaussichten</li>
          </ul>
        </div>

        <div class="mx-auto md:w-2/4 relative h-52 w-96 pr-3">
          <div class="circle-one bg-white grid place-items-center absolute text-center rounded-full h-32 w-32 border-2 border-secondary">
            <p>Kostenlose Erstberatung</p>
          </div>
          <div class="circle-two bg-white grid place-items-center absolute text-center rounded-full h-32 w-32 border-2 border-secondary">
            <p>Anwaltliche Prüfung</p>
          </div>
          <div class="circle-three bg-white grid place-items-center absolute text-center rounded-full h-32 w-32 border-2 border-secondary">
            <p>in 24 Std. Rückmeldung</p>
          </div>
        </div>
      </div>
    </section>

    <BasicSteps />

    <section class="success md:flex">
      <div class="first-half md:w-2/4 px-3 flex">
        <div class="grid container-half h-full pt-11 pb-3 ml-auto content-center">
          <h2 class="text-center md:text-left font-medium text-primary mb-5 text-3xl md:text-4xl">
            Maximiere deine Erfolgsaussichten
          </h2>
          <p class="text-center md:text-left">Mit dem BussgeldPrüfer erhöhst du deine Chance erfolgreich gegen deinen Bußgeldbescheid vorzugehen. Klicke jetzt auf “Prüfung Bußgeldbescheid” um deinen Bußgeldbescheid anzufechten.</p>
        </div>
      </div>

      <div class="second-half bg-primary md:w-2/4 px-3 my-1 text-secondary">
        <div class="grid container-half pb-11 pt-3">
          <img class="w-56 justify-self-center sm:justify-self-end" src="../assets/img/iphone-x-splashscreen.webp" alt="BussgeldPrüfer App auf einem Handy.">
          <ul role="list" class="mb-3 md:mb-0 self-center justify-self-center">
            <li>Kompetente<br>Beratung</li>
            <li>Vollständige<br>Entlastung</li>
            <li>Schnell &amp;<br>Unkompliziert</li>
          </ul>
        </div>
      </div>
    </section>

    <BasicCTA title="Kostenlose Prüfung ob sich ein Einspruch gegen Deinen Bußgeldbescheid lohnt." />

    <!-- TODO: Blog / last 3 Blogposts -->
    <!-- TODO: Clientfeedback -->

    <BasicSocialMedia />
    <BasicWarrants />
    <BasicBackToTop />

  </div>
</template>

<script>
import BasicCTA from '../components/BasicCTA.vue'
import BasicSteps from '../components/BasicSteps.vue'
import BasicSocialMedia from '../components/BasicSocialMedia.vue'
import BasicWarrants from '../components/BasicWarrants.vue'
import BasicBackToTop from '../components/BasicBackToTop.vue'

export default {
  name: 'Home',
  components: {
    BasicCTA,
    BasicSteps,
    BasicSocialMedia,
    BasicWarrants,
    BasicBackToTop
  }
}
</script>

<style scoped>
  header .second-half .container-half {
    grid-template-areas:
      'img'
      'ul'
      'p ';
  }

  header .second-half .container-half ul {
    grid-area: ul;
  }

  header .second-half .container-half img {
    grid-area: img;
  }

  header .second-half .container-half p {
    grid-area: p;
  }

  li:before {
    content: "-";
    padding-right: 0.2em;
  }

  /*.success ul {
    list-style-image: url("../assets/img/check-mark.svg");
  }*/

  .success ul li:before {
    content: "";
  }

  .success li {
    margin-bottom: 2em;
    padding-left: 2.4em;
    background: url("../assets/img/check-mark.svg") no-repeat 0 50%;
  }

  .circle-two {
    left: 108px;
    top: 60px;
    z-index: 1;
  }

  .circle-three {
    left: 210px;
    top: 20px;
    z-index: 2;
  }

  .success .second-half .container-half {
    grid-template-areas:
      'img'
      'ul';
  }

  .success .second-half .container-half img {
    grid-area: img;
  }

  .success .second-half .container-half ul {
    grid-area: ul;
  }

  @media (min-width: 640px) {
    header .second-half .container-half {
      grid-template-areas:
        'ul img'
        'p p';
    }

    .success .second-half .container-half {
      grid-template-areas:
        'ul img';
    }
  }
</style>
