
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>
                    Home Page
                </h1>
            </div>
        </div>

    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios';
export default {
    name: 'HomePage',
    components: {
        // HelloWorld,
        ProjectCard
    },
    // < !-- import HelloWorld from './HelloWorld.vue' -->
    data() {
        return {
            projects: this.projects,
            apiUrl: 'http://127.0.0.1:8000/api/projects',

        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl, {
                params: {
                    // ID: 12345
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },

    created() {
        this.getProjects();
    },
}
</script>

<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';
</style> 

    