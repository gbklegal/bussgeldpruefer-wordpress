<template>
    <header>
        <!-- TODO: add skip navigation link -->
        <nav class="my-3 pb-2 px-3 border-b-2 border-primary">
            <div class="">
                <img class="w-44" src="../assets/logo.png" alt="BussgeldPrüfer">
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
                    <a href="#" 
                        class="btn-primary"
                        >Bußgeldbescheid Prüfung</a>
                    <a href="#" 
                        class="btn-secondary"
                        >Login</a>
                </div>
            </div>
            
            <ul class="header-navigation" v-if="menuOpen">
                <li><a href="#">Wie funktioniert's?</a></li>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Bußgeldkatalog</a></li>
                <li><a href="#">Bußgeldratgeber</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">relevante Bußgeldthemen</a></li>
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