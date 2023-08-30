<template>
    <div class="project-cards">
        <!-- Project card -->
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="{{projectImage}}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title">{{ projectTitle }}</h3>
                <h5 class="card-title">{{ projectAuthor }}</h5>
                <p class="card-text">{{ projectContent }}</p>
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

    