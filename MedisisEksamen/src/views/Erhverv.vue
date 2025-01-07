<template>
  <div class="forside-container">
    <div class="text-container">
      <h1>Kvalitetsprodukter til din virksomhed</h1>
      <p>
        Klar til at levere produkter, der gør en forskel for din virksomhed.
      </p>
    </div>
    <div class="image-container">
      <img src="@/assets/KvindeH.jpg" alt="Medisis Produkter" />
    </div>
  </div>
  <section class="values-section">
    <h2>Fordele for erhvervskunder</h2>
    <div class="values-container">
      <div class="value-item">
        <img src="@/assets/kasse-ikon.png" alt="Genbrugsplast ikon" />
        <h4>Tilpassede løsningerløsninger</h4>
        <p>
          Vi forstår, at hver virksomhed har unikke behov. Derfor tilbyder vi
          hos Medisis løsninger, der matcher netop jeres ønsker. Uanset om det
          handler om specialtilpassede produkter, private label-muligheder eller
          specifikke leveringsaftaler, arbejder vi tæt sammen med jer for at
          skabe den perfekte løsning til jeres kunder eller medarbejdere."
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/baeredygtighed-ikon.png" alt="Ægte produkter ikon" />
        <h4>Høj kvalitet og bæredygtighed</h4>
        <p>
          Hos Medisis er kvalitet og bæredygtighed kernen i alt, hvad vi gør.
          Vores produkter er fremstillet af nøje udvalgte ingredienser, hvor
          fokus er på naturlige og miljøvenlige materialer. Vi sikrer, at hver
          eneste vare lever op til høje standarder for både effektivitet og
          ansvarlighed.
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/levering-ikon.png" alt="God kundeservice ikon" />
        <h4>Hurtig levering</h4>
        <p>
          Hos Medisis bliver ordrer typisk sendt inden for 1-2 hverdage.
          Leveringstiden afhænger af fragtfirmaet, men forventes normalt at være
          2-5 hverdage.
        </p>
      </div>
    </div>
  </section>
  <section class="popular-products">
    <h3>Produktoversigt</h3>
    <div class="products-container">
      <div class="product-item">
        <img src="@/assets/fodbadesalt.png" alt="Fodbadssalt" />
        <h3>Fodbadesalt</h3>
        <p>Med kamille (25ml)</p>
        <p>65,-</p>
        <button class="product-btn">Tilføj til kurv</button>
      </div>
      <div class="product-item">
        <img src="@/assets/kokus.png" alt="Body Lotion" />
        <h3>Body Lotion</h3>
        <p>Med kamille (25ml)</p>
        <p>55,-</p>
        <button class="product-btn">Tilføj til kurv</button>
      </div>
      <div class="product-item">
        <img src="@/assets/BodyLotion.png" alt="Body Lotion" />
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
  <section class="proevepakke-sektion">
    <div class="tekst-indhold">
      <h2>Prøv vores prøvepakker og oplev forskellen</h2>
      <p>
        Medisis tilbyder tilpassede prøvepakker, så I kan teste vores produkter,
        før I træffer en endelig beslutning. Vores prøvepakker giver jer
        mulighed for at opleve kvaliteten, designet og funktionaliteten af vores
        løsninger – helt uden binding. Kontakt os i dag og lad os sammensætte en
        pakke, der matcher jeres behov.
      </p>
    </div>
    <div class="billede-indhold">
      <div class="billede-container">
        <img src="@/assets/pravepakke.png" alt="Massageolie prøvepakke" />
      </div>
      <div class="pakke-detaljer">
        <h3>Massageolie prøvepakke</h3>
        <button>Bestil prøve pakke</button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.forside-container {
  display: flex;
  align-items: center;

  padding: 20px;
  margin: 0 100px;
  gap: 100px;
}

.text-container {
  max-width: 50%;
}

.text-container h1 {
  font-size: 45px;
  margin-bottom: 10px;
  margin-top: 0;
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.image-container img {
  max-width: 450px;
  max-height: 500px;
  height: auto;
}

.popular-products {
  text-align: center;
  padding: 50px 0;
  background-color: #f2f3ee;
}

.popular-products h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: bold;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.product-item {
  background-color: white;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-item img {
  width: 100%;
  height: 300px;
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
  width: 100%;
  background-color: #5f6622;
  color: white;
  border: none;
  padding: 10px 0;
  cursor: pointer;
  margin-top: 10px;
}

.product-btn:hover {
  background-color: #3e7732;
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
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.proevepakke-sektion {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
  padding: 40px;
}

.tekst-indhold h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.tekst-indhold p {
  font-size: 1rem;
  line-height: 1.6;
}

.billede-indhold {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.billede-container img {
  max-width: 450px;
  max-height: 500px;
  height: auto;
}

.pakke-detaljer h3 {
  margin-bottom: 10px;

  margin-top: 10px;
}
.pakke-detaljer {
  background-color: white;
  width: 450px;
  text-align: center;
}

.pakke-detaljer button {
  background-color: #6b7849;
  color: white;
  border: none;
  padding: 10px 20px;
  width: 450px;
  margin-top: 10px;

  cursor: pointer;
}

.pakke-detaljer button:hover {
  background-color: #3e7732;
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
  line-height: 1.5;
  color: #333;
  text-align: left;
}
</style>
