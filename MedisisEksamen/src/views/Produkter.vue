<template>
  <div>
    <h1>Produkter</h1>
    <ul>
      <li v-for="produkt in produkter" :key="produkt.id">
        <router-link :to="`/produkter/${produkt.id}`">
          {{ produkt.navn }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Produkter",
  data() {
    return {
      produkter: [
        { id: 1, navn: "Produkt A" },
        { id: 2, navn: "Produkt B" },
        { id: 3, navn: "Produkt C" },
      ],
    };
  },
};
</script>
