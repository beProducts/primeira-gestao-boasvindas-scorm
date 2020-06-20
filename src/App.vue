<template>
  <div id="app">
    <TransitionPage>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </TransitionPage>
  </div>
</template>

<script>
import TransitionPage from './components/TransitionPage.vue';
import './assets/fonts/sanukOT/sanukOT.css';
import "vue-material-design-icons/styles.css";

// eslint-disable-next-line
import 'animate.css';

export default {
  name: 'app',
  components: {
    TransitionPage,
  },
  methods: {
    goToRoute(route) {
      this.$router.push({ path: route });
    }
  }
}
</script>

<style lang="scss">
  html, body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }
  #app > div{
    position: absolute;
    width: 100%;
    top: 0;
  }
</style>
