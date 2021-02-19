<template>
  <div class="contact">
  <!-- TODO: Logic + Layout -->
    <div class="container">
      <h1 class="text-4xl md:text-5xl font-light mb-6">Kontakt</h1>
      <section>
        <h2 class="font-medium text-primary text-3xl md:text-4xl">Du hast Fragen?</h2>
        <p class="mb-5">Falls noch offene Fragen bestehen, kannst du uns gerne kontaktieren.</p>
        <form id="contactform" action="">
          <fieldset class="mb-4">
            <legend class="font-medium mb-2">Deine Kontaktdaten</legend>

            <label class="block" for="firstname">Vorname</label>
            <input 
              class="block mb-3 rounded border-primary border-2 focus:ring focus:border-secondary focus:ring-secondary focus:ring-opacity-50" 
              type="text" name="firstname" id="firstname" required>


            <label class="block" for="lastname">Nachname</label>
            <input 
              class="block mb-5 rounded border-primary border-2 focus:ring focus:border-secondary focus:ring-secondary focus:ring-opacity-50" 
              type="text" name="lastname" id="lastname" required>

            <label class="block" for="email">E-Mail Adresse</label>
            <input 
              class="block mb-3 rounded border-primary border-2 focus:ring focus:border-secondary focus:ring-secondary focus:ring-opacity-50" 
              type="email" name="email" id="email">

            <label class="block" for="phone">Telefonnummer</label>
            <input 
              class="block mb-3 rounded border-primary border-2 focus:ring focus:border-secondary focus:ring-secondary focus:ring-opacity-50" 
              type="tel" name="phone" id="phone">
          </fieldset>

          <label class="block font-medium" for="message">Deine Nachricht</label>
          <textarea 
            class="block mb-3 rounded border-primary border-2 focus:ring focus:border-secondary focus:ring-secondary focus:ring-opacity-50" 
            name="message" id="message" cols="30" rows="10" required></textarea>

          <button
            class="btn-primary focus:ring focus:border-secondary focus:ring-secondary focus:ring-opacity-50"
            type="submit">Senden</button>
        </form>
      </section>

      <section class="mt-8">
        <h2 class="font-medium text-primary mb-5 text-3xl md:text-4xl md:mx-0">Du kannst uns auch direkt erreichen</h2>
         <div>
            <span class="mr-2">Email:</span>
            <a href="mailto:dialog@bussgeldpruefer.de">dialog@bussgeldpruefer.de</a>
          </div>
          <div>
            <span class="mr-2">Tel:</span>
            <a href="tel:091112345678">0911/12345678</a>
          </div>
      </section>
    </div>
  </div>
</template>