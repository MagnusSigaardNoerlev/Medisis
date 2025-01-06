<template>
  <h1>Produkter</h1>
  <div class="produktkategorier">
    <ul>
      <li v-for="produkt in produkter" :key="produkt.id">
        <router-link :to="'/produkter/' + produkt.id" class="card">
          <img :src="produkt.billede" :alt="produkt.navn" />
          <div class="card-content">
            <h3>{{ produkt.navn }}</h3>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "produkter",
  data() {
  return {
    produkter: [
      { id: 1, navn: "Massage", billede: "/src/assets/massage.jpg" },
      { id: 2, navn: "Pleje", billede: "/src/assets/pleje.jpg" },
      { id: 3, navn: "Emballage", billede: "/src/assets/emballage.jpg" },
      { id: 4, navn: "Andre produkter", billede: "/src/assets/andreprodukter.png" },
    ],
  };
},
};
</script>

<style scoped>
.produktkategorier ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
}

.produktkategorier li {
  flex: 1 1 calc(25% - 20px);
  margin: 10px;
  max-width: calc(25% - 20px);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 75px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 0;
}

.card-content {
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  transition: background-color 0.3s ease;
}
</style>
