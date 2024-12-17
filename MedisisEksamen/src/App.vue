<template>
    <div>
      <h1>Velkommen til projektet</h1>
      <Produkter />
    </div>
  </template>
  
  <script>
  import Produkter from "./components/produkter.vue"; // Importér komponenten
  
  export default {
    components: {
      Produkter, // Registrér komponenten
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  </style>
  