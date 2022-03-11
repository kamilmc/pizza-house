<template>
  <Header />
  <transition name="slide" mode="out-in" appear>
    <router-view :key="$route.fullPath"></router-view>
  </transition>
  <Footer />
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header, Footer
  },
  computed: {
    pizzas() {
      return this.$store.state.pizzas
    }
  },
  created() {
  },
  methods: {

  },
}
</script>

<style lang="scss">
  .slide-enter-active,
  .slide-leave-active {
      transition: transform 0.3s ease-in-out;
  }

  .slide-enter-from {
      transform: translateX(-100vw);
  }

  .slide-leave-to {
      transform: translateX(100vw);
  }
</style>
