<template>
  <body>
    <!-- <HelloWorld /> -->
    <header>
      <AppHeader />
    </header>
    <main>
      <AppMain />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </body>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppHeader,
    AppMain,
    AppFooter,
  }
}

</script>
<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import './styles/general.scss';
</style>

