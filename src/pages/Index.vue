
<template>
    <div class="container my-index">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center mb-5">
                    Index
                </h1>
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <div class="d-flex mb-4" role="search">
                                <!-- <label for="Search">Search a projec t</label> -->

                                <input class="form-control me-2" id="searchText" type="text" placeholder="Search"
                                    v-model="searchText" @keyup.enter="newSearch(searchText)">
                                <button class=" btn btn-outline-success" @click="newSearch(searchText)"> Search </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" container">
                    <div class="row d-flex flex-wrap justify-content-center">
                        <ProjectCard class="col-3 mb-3 p-0 d-flex justify-content-center" v-for="project in this.projects"
                            :projectTitle=project.title :projectAuthor=project.author :projectContent=project.content
                            :projectImage=project.image :typeColor=project.type.color :typeName=project.type.name
                            :technologies=project.technologies :technologyName=project.technologies.title />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import axios from 'axios';
export default {
    name: 'PostsList',
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
        getProjects(apiUrl = this.apiUrl, titleQuery = false) {
            const params = {}
            if (titleQuery) {
                params.search = titleQuery;
            }

            axios.get(this.apiUrl, { params })
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

        },

        newSearch(titleToSearch) {
            // console.log(titleToSearch);
            this.getProjects(this.apiUrl, titleToSearch);
        }
    },

    created() {
        this.getProjects(this.apiUrl);
    },
}
</script>

<style scoped lang="scss">
@use '../styles/partials/_variables.scss';
@use '../styles/partials/_mixins.scss';

.my-index {
    max-width: 80%;
    margin: 30px auto;
}
</style> 

    