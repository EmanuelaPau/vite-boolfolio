<template>
  <body>
    <header>
      <AppHeader />
    </header>

    <main>
      <router-view>
      </router-view>
    </main>

    <footer>
      <AppFooter />
    </footer>
  </body>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      projects: this.projects,
    }
  },
  methods: {
  },

  created() {
  },
}

</script>
<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import './styles/general.scss';
</style>

