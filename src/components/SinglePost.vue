<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="project-cards" v-if="project">
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

                            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    name: 'SinglePost',
    components: {

    },
    // < !-- import HelloWorld from './HelloWorld.vue' -->
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects/',
            project: '',
        }
    },
    methods: {
        getProjects() {
            axios.get(`${this.apiUrl}/api/projects/${this.$route.params.id}`)
                .then((response) => {
                    if (response.data.success) {
                        console.log(response.data.project);
                        this.projects = response.data.project;
                    }
                    else {
                        this.$router.push({ name: 'not found' })
                    }
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
    },
}
</script>

<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';
</style> 

    