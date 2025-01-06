<template>
  <div class="forside-container">
    <div class="text-container">
      <h1>Velkommen til Medisis</h1>
      <p>
        Vi producerer kropspleje- og massageprodukter af rene råvarer – til både
        private og erhverv. Oplev kvalitet og omtanke i hvert eneste produkt.
      </p>
    </div>
    <div class="image-container">
      <img src="@/assets/medisis-image.jpg" alt="Medisis Produkter" />
    </div>
  </div>
  <section class="two-columns">
    <div class="column">
      <img src="@/assets/shopping-bag.png" alt="Produkt ikon" class="icon" />
      <h3>Naturlige produkter</h3>
      <p>
        Køb naturlige kropsplejeprodukter direkte fra os og oplev vores
        bæredygtige hjemmelavede kvalitet
      </p>
      <button class="btn">Se vores produkter</button>
    </div>
    <div class="column">
      <img src="@/assets/b2b.png" alt="Produkt ikon" class="icon" />
      <h3>Løsninger til erhverv</h3>
      <p>
        Vi leverer også til klinikker, butikker og erhverv – med løsninger
        tilpassede til professionelle behov.
      </p>
      <button class="btn">Se vores B2B løsninger</button>
    </div>
  </section>
  <section class="popular-products">
    <h2>Vores populære produkter</h2>
    <div class="products-container">
      <div class="product-item">
        <img src="@/assets/fodbadesalt.png" alt="Fodbadssalt" />
        <h3>Fodbadesalt</h3>
        <p>65,-</p>
      </div>
      <div class="product-item">
        <img src="@/assets/body-lotion.png" alt="Body Lotion" />
        <h3>Body Lotion</h3>
        <p>Med kamille (25ml)</p>
        <p>55,-</p>
      </div>
      <div class="product-item">
        <img src="@/assets/body-lotion.png" alt="Body Lotion" />
        <h3>Body Lotion</h3>
        <p>Med kamille (25ml)</p>
        <p>55,-</p>
      </div>
      <div class="product-item">
        <img src="@/assets/body-lotion.png" alt="Body Lotion" />
        <h3>Body Lotion</h3>
        <p>Med kamille (25ml)</p>
        <p>55,-</p>
      </div>
    </div>
    <button class="view-all-btn">Se Alle produkter</button>
  </section>
</template>

<script>
export default {
  name: "Forside",
};
</script>

<style scoped>
.forside-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 100px; /* Tilføj margin til venstre og højre */
}

.text-container {
  max-width: 50%;
}

.text-container h1 {
  font-size: 50px;
  margin-bottom: 10px;
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
}

.image-container img {
  max-width: 500px;
  max-height: 500px;
  height: auto;
  border-radius: 10px;
}
.popular-products {
  text-align: center;
  padding: 50px 0;
  background-color: #f2f3ee; /* Baggrundsfarve */
}

.popular-products h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: bold;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 kolonner */
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.product-item {
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-item img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.product-item h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.product-item p {
  font-size: 1rem;
  color: #333;
}

.view-all-btn {
  background-color: #4c8f3e;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 30px;
}

.view-all-btn:hover {
  background-color: #5f6622;
}
.column img {
  max-width: 100px;
  max-height: 100px;
  display: flex;

  justify-self: center;
}
.two-columns {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 50px 20px;
  margin: 0 100px;
}

.column {
  flex: 1; /* Gør begge kolonner lige brede */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.column h3 {
  font-size: 1.8rem;

  margin-bottom: 20px;
  text-align: center;
}

.column p {
  font-size: 1rem;
  margin-bottom: 30px;
  color: #333;
}

.btn {
  background-color: #5f6622;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  display: flex;
  justify-self: center;
}

.btn:hover {
  background-color: #3e7732;
}
</style>
