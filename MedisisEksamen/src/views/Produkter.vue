<template>
<section class="intro">
  <div class="introText">
    <h1>Naturlig Kropspleje med Omtanke</h1>
    <p>
      Hos Medisis tilbyder vi et bredt udvalg af naturlige kropsplejeprodukter, der er skabt med omtanke for både dig og miljøet. Uanset om du søger massageolier, body lotions, eller produkter til afslappende fodbad, finder du her kvalitetsprodukter, der plejer din hud.
    </p>
  </div>
  <img src="@/assets/medisis-image.jpg" alt="Billede af produkter" />
</section>

  <section class="produktkategorier">
    <h3>Produktkategorier</h3>
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
  </section>
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
.intro {
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0 100px;
  gap: 100px;
}

.introText h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro img {
  max-width: 450px;
  max-height: 500px;
  height: auto;
}

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
