<template>
  <div class="forside">
    <header class="hero">
      <h1>Velkommen til Medisis</h1>
      <p>Kropspleje og massageprodukter skabt med rene råvarer.</p>
      <button @click="goToProdukter">Se vores produkter</button>
    </header>

    <section class="om-os">
      <h2>Om Medisis</h2>
      <p>
        Vi fokuserer på hjemmelavede produkter med få ingredienser og
        miljøvenlig emballage.
      </p>
    </section>

    <section class="produkter">
      <h2>Populære produkter</h2>
      <div class="produkter-list">
        <div class="produkt">
          <img src="@/assets/produkt1.jpg" alt="Produkt 1" />
          <p>Massageolie</p>
        </div>
        <div class="produkt">
          <img src="@/assets/produkt2.jpg" alt="Produkt 2" />
          <p>Kropscreme</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Forside",
  methods: {
    goToProdukter() {
      this.$router.push("/produkter");
    },
  },
};
</script>

<style scoped>
.forside {
  text-align: center;
  padding: 20px;
}

.hero {
  background: #f2f3ee;
  padding: 40px;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
}

.hero p {
  font-family: "Open Sans", sans-serif;
}

.om-os,
.produkter {
  margin: 40px 0;
}

.produkter-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.produkt img {
  width: 150px;
  border-radius: 8px;
}
</style>
