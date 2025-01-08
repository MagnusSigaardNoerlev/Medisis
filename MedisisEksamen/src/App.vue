<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"; // Import Header
import Footer from "./components/Footer.vue"; // Import Footer

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
