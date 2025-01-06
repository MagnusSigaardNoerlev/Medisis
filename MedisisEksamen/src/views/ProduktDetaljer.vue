<template>
  <div>
    <h1>Produktdetaljer</h1>
    <p>Du ser nu detaljer for produkt: {{ produktId }}</p>
  </div>
</template>

<script>
export default {
  name: "ProduktDetaljer",
  computed: {
    // Hent produkt-id fra ruten
    produktId() {
      return this.$route.params.id;
    },
  },
};
</script>
