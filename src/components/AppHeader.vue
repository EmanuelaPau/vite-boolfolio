
<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light px-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="link in links">
                            <router-link class="nav-link" :to="{ name: link.route }">
                                {{ link.name }}
                            </router-link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    components: {
    },
    data() {
        return {
            links: [
                {
                    route: 'homepage',
                    name: 'Homepage'
                },
                {
                    route: 'about',
                    name: 'About Us'
                },
                {
                    route: 'index',
                    name: 'index'
                },
            ]

        }
    },
    methods() {
    },
}	
</script>
<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';
</style> 

    