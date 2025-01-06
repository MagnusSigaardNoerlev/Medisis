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
    <h3>Vores populære produkter</h3>
    <div class="products-container">
      <div class="product-item">
        <img src="@/assets/fodbadesalt.png" alt="Fodbadssalt" />
        <h3>Fodbadesalt</h3>
        <p>Med kamille (25ml)</p>
        <p>65,-</p>
        <button class="product-btn">Tilføj til kurv</button>
      </div>
      <div class="product-item">
        <img src="@/assets/body-lotion.png" alt="Body Lotion" />
        <h3>Body Lotion</h3>
        <p>Med kamille (25ml)</p>
        <p>55,-</p>
        <button class="product-btn">Tilføj til kurv</button>
      </div>
      <div class="product-item">
        <img src="@/assets/body-lotion.png" alt="Body Lotion" />
        <h3>Body Lotion</h3>
        <p>Med kamille (25ml)</p>
        <p>55,-</p>
        <button class="product-btn">Tilføj til kurv</button>
      </div>
      <div class="product-item">
        <img src="@/assets/body-lotion.png" alt="Body Lotion" />
        <h3>Body Lotion</h3>
        <p>Med kamille (25ml)</p>
        <p>55,-</p>
        <button class="product-btn">Tilføj til kurv</button>
      </div>
    </div>
    <button class="view-all-btn">Se Alle produkter</button>
  </section>
  <div class="forside-container-NaturligPleje">
    <div class="text-container">
      <h3>Naturlig Pleje</h3>
      <p>
        Vi præsenterer et produkt, der er designet med omtanke og respekt for
        både miljø og mennesker.
      </p>
      <div class="naturligeikoner">
        <p>
          <strong>Rene råvarer:</strong> Vi bruger kun naturlige og
          uforarbejdede ingredienser.
        </p>
        <img src="@/assets/natural-ingredients.png" alt="" />
      </div>
      <div class="naturligeikoner">
        <p>
          <strong>Få ingredienser:</strong> Simplicitet er nøglen – vi fokuserer
          på det nødvendige.
        </p>
        <img src="@/assets/sustainable.png" alt="" />
      </div>
      <div class="naturligeikoner">
        <p>
          <strong>Genbrugs emballage:</strong> Vi værner om miljøet ved at vælge
          bæredygtige løsninger.
        </p>
        <img src="@/assets/recycle.png" alt="" />
      </div>
      <div class="naturligeikoner">
        <p>
          <strong>Skabt med kærlighed:</strong> Hvert produkt er lavet med
          passion og omsorg for din pleje.
        </p>
        <img src="@/assets/plant-a-tree.png" alt="" />
      </div>
    </div>
    <div class="image-container">
      <img
        src="@/assets/Naturligpleje.png"
        alt="Billede af narturlige ingredienser i vores produkter"
      />
    </div>
  </div>
  <section class="values-section">
    <h2>Vores værdier</h2>
    <div class="values-container">
      <div class="value-item">
        <img src="@/assets/recycle-icon.png" alt="Genbrugsplast ikon" />
        <h3>Genbrugsplast</h3>
        <p>
          Medisis er engageret i at beskytte miljøet, og derfor bruger vi så
          vidt muligt genbrugsplast i vores emballage. Ved at vælge
          genbrugsplast reducerer vi affald og minimerer forbruget af nye
          ressourcer.
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/natural-icon.png" alt="Ægte produkter ikon" />
        <h3>Ægte produkter</h3>
        <p>
          Medisis produkter er skabt med få ingredienser og rene råvarer for at
          sikre den højeste kvalitet. Vi tror på enkelhed og ægthed, hvilket
          afspejles i vores produkter, der er både effektive og naturlige.
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/service-icon.png" alt="God kundeservice ikon" />
        <h3>God kundeservice</h3>
        <p>
          Kundeservice er hjertet i vores virksomhed. Vi sætter en ære i at
          lytte til vores kunder, tilbyde tilpassede løsninger og sikre, at alle
          oplevelser med os er positive. Vi er her for at hjælpe og guide dig på
          hver eneste step.
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/environment-icon.png" alt="Miljøvenligt ikon" />
        <h3>Miljøvenligt</h3>
        <p>
          Vores miljøvenlige produkter hjælper med at reducere affald og
          CO2-udledning, samtidig med at du får kvalitetsvarer, der er både
          praktiske og bæredygtige. Gør en forskel med dine køb og vær med til
          at støtte en grønnere fremtid.
        </p>
      </div>
    </div>
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
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.product-item p {
  font-size: 1rem;
  color: #333;
}
.product-btn {
  display: block;
  width: 100%; /* Gør knappen lige så bred som kortet */
  background-color: #5f6622; /* Grøn farve */
  color: white;
  border: none;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  text-transform: uppercase;
}

.product-btn:hover {
  background-color: #3e7732; /* Mørkere grøn ved hover */
}

.view-all-btn {
  background-color: #5f6622;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 30px;
}

.view-all-btn:hover {
  background-color: #3e7732;
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

.forside-container-NaturligPleje {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 50px; /* Tilføj margin til venstre og højre */
}
.forside-container-NaturligPleje h3 {
  font-size: 1.8rem;
}
.forside-container-NaturligPleje img {
  height: 830px;
}
.naturligeikoner {
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  align-items: center;
}
.naturligeikoner img {
  display: flex;
  height: 50px;
}

.values-section {
  text-align: center;
  padding: 50px 20px;
}

.values-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.values-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Responsivt grid */
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.value-item {
  text-align: center;
  padding: 20px;
}

.value-item img {
  width: 100px; /* Ikonstørrelse */
  height: auto;
}

.value-item h3 {
  margin-bottom: 15px;
}

.value-item p {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}
</style>
