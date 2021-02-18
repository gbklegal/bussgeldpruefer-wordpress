<template>
    <section class="bg-primary">
        <div class="container text-center">
            <h2 class="font-medium text-secondary mb-5 text-3xl md:text-4xl">{{ title }}</h2>
            <!-- TODO: only show p if prop is submitted -->
            <p class="text-white mb-6">{{ subtitle }}</p>
            <router-link class="btn-primary" to="/bussgeldbescheid-pruefen">
                Bussgeldbescheid Prüfung
            </router-link>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CTA',
    props: {
        title: String,
        subtitle: String,
    }
}
</script>
<style scoped>

</style>