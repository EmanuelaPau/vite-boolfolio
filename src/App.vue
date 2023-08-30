<template>
  <body>
    <header>
      <!-- <AppHeader /> -->
    </header>
    <main>
      <AppMain />
    </main>
    <footer>
      <!-- <AppFooter /> -->
    </footer>
  </body>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppHeader,
    AppMain,
    AppFooter,
  },
  // < !-- import HelloWorld from './HelloWorld.vue' -->
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
<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import './styles/general.scss';
</style>

