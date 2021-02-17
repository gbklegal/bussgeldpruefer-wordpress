<template>
    <section class="bg-primary py-11 text-center">
        <h2 class="font-medium text-secondary mb-5 text-4xl">{{ title }}</h2>
        <!-- TODO: only show p if prop is submitted -->
        <p class="text-white mb-6">{{ subtitle }}</p>
        <router-link class="btn-primary" to="/bussgeldbescheid-pruefen">
            Bussgeldbescheid Prüfung
        </router-link>
    </section>
</template>
<script>
export default {
    name: 'BasicCTA',
    props: {
        title: String,
        subtitle: String,
    }
}
</script>
<style scoped>

</style>