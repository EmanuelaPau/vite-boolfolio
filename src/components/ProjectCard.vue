<template>
    <div class="project-cards">
        <!-- Project card -->
        <div class="card p-2 m-2 h-auto" style="">
            <img class="card-img-top" src="{{projectImage}}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title mb-3">{{ projectTitle }}</h3>
                <h5 class="card-title mb-3">{{ projectAuthor }}</h5>
                <p class="card-text">{{ projectContent }}</p>
                <div class="list-group list-group-flush">
                    <h5 class="list-group-item text-center">
                        {{ typeName }}
                    </h5>
                </div>
                <div class="d-flex flex-wrap justify-content-center mb-5">
                    <span v-for="technology in technologies" class="badge rounded-pill text-bg-success mx-1">{{
                        technology.name }}</span>
                </div>
                <router-link class="btn btn-primary" :to="{ name: 'singlepost' }">
                    Go to Project
                </router-link>

                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    components: {
    },
    props: {
        projectTitle: String,
        projectAuthor: String,
        projectContent: String,
        projectImage: String,
        typeColor: String,
        typeName: String,
        technologies: Array,
        technologyName: String,
    },
    data() {
        return {

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

    