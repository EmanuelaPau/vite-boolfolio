
<template>
    <div>
        MAIN
    </div>
</template>

<script>
// < !-- import HelloWorld from './HelloWorld.vue' -->
import axios from 'axios';
export default {
    name: 'AppMain',
    components: {
    },
    data() {
        return {

            projects: [
            ],
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
                .then(function (response) {
                    console.log(response);
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

    