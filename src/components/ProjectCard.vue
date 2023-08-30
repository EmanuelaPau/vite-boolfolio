<template>
    <div class="project-cards">
        <!-- Project card -->
        <div class="card p-2" style="width: 18rem;">
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
                <div class="d-flex flex-wrap justify-content-center">
                    <span v-for="technology in technologies" class="badge rounded-pill text-bg-primary mx-1">{{
                        technology.name }}</span>
                </div>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
        <!-- <p v-for="project in projects">{{ project.title }}</p>  -->
    </div>
</template>

<script>
// < !-- import HelloWorld from './HelloWorld.vue' -->
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

    