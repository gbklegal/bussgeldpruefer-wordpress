<template>
    <header>
        <!-- TODO: add skip navigation link -->
        <nav id="nav" class="my-3 pb-2 px-3 border-b-2 border-primary">
                <!--<div id="nav">
                </div>-->

            <div class="">
                <router-link to="/">
                    <img class="w-44" src="../assets/logo.png" alt="BussgeldPrüfer">
                </router-link>

                <button v-on:click="menuOpen = !menuOpen" class="w-7 xl:hidden xl:invisible">
                    <svg v-if="!menuOpen" role="img" aria-labelledby="openMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <title id="openMenu">Open Menu</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-if="menuOpen" role="img" aria-labelledby="closeMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <title id="closeMenu">Close Menu</title>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="navigation-buttons">
                    <router-link class="btn-primary" to="/bussgeldbescheid-pruefen">Bussgeldbescheid Prüfung</router-link>
                    <router-link class="btn-secondary" to="/login">Login</router-link>
                </div>
            </div>
            <ul class="header-navigation" v-if="menuOpen">
                <li>
                    <router-link to="/wie-funktioniert-es">Wie funktioniert's</router-link>
                </li>
                <li>
                    <router-link to="/kontakt">Kontakt</router-link>
                </li>
                <li>
                    <router-link to="/bussgeldkatalog">Bußgeldkatalog</router-link>
                </li>
                <li>
                    <router-link to="/ratgeber">Bußgeldratgeber</router-link>
                </li>
                <li>
                    <router-link to="/faq">FAQ</router-link>
                </li>
                <li>
                    <router-link to="/relevante-themen">relevante Bußgeldthemen</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default { 
    name: 'Header',
    data: () => {
        return {
            menuOpen: false,
        }
    }
}
</script>
<style scoped>
    nav div {
        display: grid;
        grid-row-gap: 1em;
        grid-template-areas:
            'logo toggle'
            'btns btns';
    }
    
    img {
        grid-area: logo;
    }

    button {
        grid-area: toggle;
        justify-self: end;
    }

    ul {
        grid-area: ul;
        margin-top: 2em;
    }

    .navigation-buttons {
        grid-area: btns;
        display: flex;
        justify-content: space-between;
    }

    @media (min-width: 768px) {
        nav {
            grid-template-areas: 
                'logo btns toggle';
        }
    }

    @media (min-width: 1024px) {
        nav {
            grid-template-areas:
                'logo btns';
        }
    }

</style>