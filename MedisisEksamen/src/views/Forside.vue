<template>
  <section class="sideIndhold">
    <div class="forside-container">
      <div class="text-container">
        <h1>Velkommen til Medisis</h1>
        <p>
          Vi producerer kropspleje- og massageprodukter af rene råvarer – til
          både private og erhverv. Oplev kvalitet og omtanke i hvert eneste
          produkt.
        </p>
      </div>
      <div class="image-container">
        <img src="@/assets/forsidebillede.jpg" alt="Medisis Produkter" />
      </div>
    </div>
    <section class="two-columns">
      <div class="column">
        <img src="@/assets/shopping-bag.png" alt="Produkt ikon" class="icon" />
        <h3>Naturlige produkter</h3>
        <p>
          Køb naturlige kropsplejeprodukter direkte fra os og oplev vores
          bæredygtige hjemmelavede kvalitet.
        </p>
        <button class="btn">
          <router-link to="/produkter">Se vores produkter</router-link>
        </button>
      </div>
      <div class="column">
        <img src="@/assets/b2b.png" alt="Produkt ikon" class="icon" />
        <h3>Løsninger til erhverv</h3>
        <p>
          Vi leverer også til klinikker, butikker og erhverv – med løsninger
          tilpassede til professionelle behov.
        </p>
        <button class="btn">
          <router-link to="/erhverv">Se vores B2B løsninger</router-link>
        </button>
      </div>
    </section>
    <section class="newest-products">
  <h3>Se nogle af vores produkter</h3>
  <div v-if="loading" class="loading">Indlæser produkter...</div>
  <div v-else class="newest-products-container">
    <!-- Loop gennem de nyeste produkter -->
    <div
      class="newest-product"
      v-for="product in productsForForside"
      :key="product.id"
    >
      <router-link
        :to="{ name: 'ProduktSide', params: { id: product.id } }"
        class="newest-product-item"
      >
        <img
          :src="product.images[0]?.src"
          :alt="product.name"
          class="newest-product-image"
        />
        <h4 class="newest-product-title">{{ product.name }}</h4>
        <p class="newest-product-price">{{ product.priceRange }}</p>
      </router-link>
      <!-- Tilføj til kurv knap -->
      <div class="newest-product-btn-placeholder">
        <button class="newest-product-btn">Tilføj til kurv</button>
      </div>
    </div>
  </div>
  <button class="view-all-btn">
    <router-link to="/produkter">Se alle vores produkter</router-link>
  </button>
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
            <strong>Få ingredienser:</strong> Simplicitet er nøglen – vi
            fokuserer på det nødvendige.
          </p>
          <img src="@/assets/sustainable.png" alt="" />
        </div>
        <div class="naturligeikoner">
          <p>
            <strong>Genbrugs emballage:</strong> Vi værner om miljøet ved at
            vælge bæredygtige løsninger.
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
          alt="Billede af naturlige ingredienser i vores produkter"
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
            Medisis produkter er skabt med få ingredienser og rene råvarer for
            at sikre den højeste kvalitet. Vi tror på enkelhed og ægthed,
            hvilket afspejles i vores produkter, der er både effektive og
            naturlige.
          </p>
        </div>
        <div class="value-item">
          <img src="@/assets/service-icon.png" alt="God kundeservice ikon" />
          <h3>God kundeservice</h3>
          <p>
            Kundeservice er hjertet i vores virksomhed. Vi sætter en ære i at
            lytte til vores kunder, tilbyde tilpassede løsninger og sikre, at
            alle oplevelser med os er positive. Vi er her for at hjælpe og guide
            dig på hver eneste step.
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
    <section class="slideshow-section">
      <h2>Se hvad vores kunder siger</h2>
      <div class="slideshow-container">
        <div class="slideshow-slide active">
          <div class="slideshow-testimonial">
            <img src="@/assets/karen.png" alt="Karen" />
            <h3>Karen</h3>
            <p>
              "Bestiller olie til min klinik. God olie, super service samt
              hurtig levering."
            </p>
          </div>
        </div>
        <div class="slideshow-slide">
          <div class="slideshow-testimonial">
            <img src="@/assets/mads.png" alt="Mads" />
            <h3>Mads</h3>
            <p>
              "Super lækre produkter, som jeg selv bruger til mine klienter -
              som massør. Kan klart anbefales."
            </p>
          </div>
        </div>
        <div class="slideshow-slide">
          <div class="slideshow-testimonial">
            <img src="@/assets/anette.png" alt="Anette" />
            <h3>Anette</h3>
            <p>"Super god body lotion til tør hud."</p>
          </div>
        </div>
      </div>
      <div class="slideshow-controls">
        <span class="slideshow-dot active" data-slide="0"></span>
        <span class="slideshow-dot" data-slide="1"></span>
        <span class="slideshow-dot" data-slide="2"></span>
      </div>
    </section>
    <section class="medisis-section">
      <div class="card">
        <img
          src="@/assets/om-medisis.png"
          alt="Om Medisis"
          class="card-image"
        />
        <div class="card-content">
          <h1>Om Medisis</h1>
          <a href="" class="card-button"
            ><router-link to="/om-medisis"
              >Læs mere om Medisis her</router-link
            ></a
          >
        </div>
      </div>
      <div class="card">
        <img src="@/assets/enhverv.png" alt="Enhverv" class="card-image" />
        <div class="card-content">
          <h1>Erhverv</h1>
          <a href="./Erhverv.vue" class="card-button"
            ><router-link to="/erhverv"
              >Læs mere om erhvervskunde</router-link
            ></a
          >
        </div>
      </div>
    </section>
  </section>
</template>


<script>
import axios from "axios";

// API-autentificering
const API_AUTH = {
  username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
  password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
};

export default {
  name: "Forside",
  data() {
    return {
      productsForForside: [], // Liste over produkter til forsiden
      loading: true, // Indikator for indlæsning
    };
  },
  methods: {
    // Henter variationer for produkter og beregner prisspænd
    async fetchVariations(product) {
      try {
        const response = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${product.id}/variations`,
          { auth: API_AUTH }
        );
        const prices = response.data.map((variation) =>
          parseFloat(variation.price)
        );
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        return minPrice === maxPrice
          ? `${minPrice} kr`
          : `${minPrice} - ${maxPrice} kr`;
      } catch (error) {
        console.error(
          `Fejl ved hentning af variationer for produkt ${product.id}:`,
          error
        );
        return `${product.price} kr`; // Fallback hvis der er en fejl
      }
    },

    // Henter de nyeste produkter og beregner prisspænd
    async fetchNewestProducts() {
      try {
        this.loading = true;

        const response = await axios.get(
          "https://medisis.magnusnoerlev.com/wp-json/wc/v3/products",
          {
            auth: API_AUTH,
            params: {
              per_page: 4, // Antal produkter at hente
              orderby: "date", // Sorter efter dato
              order: "desc", // Nyeste produkter først
            },
          }
        );

        // Hent variationer for hvert produkt og beregn prisspænd
        const productsWithPrices = await Promise.all(
          response.data.map(async (product) => {
            if (product.type === "variable") {
              product.priceRange = await this.fetchVariations(product);
            } else {
              product.priceRange = `${product.price} kr`;
            }
            return product;
          })
        );

        this.productsForForside = productsWithPrices;
      } catch (error) {
        console.error("Fejl ved hentning af produkter:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    // Kalder funktionen, når komponenten loades
    this.fetchNewestProducts();
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slideshow-slide");
  const dots = document.querySelectorAll(".slideshow-dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Automatisk slideshow
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 2000);
});
</script>


<style scoped>
.forside-container {
  display: flex;
  align-items: center;
  gap: 100px;
}

.text-container {
  max-width: 50%;
}

.text-container h1 {
  margin-bottom: 10px;
  margin-top: 0;
}

.image-container img {
  max-width: 600px;
  max-height: 500px;
  height: auto;
}
.newest-products {
  padding: 40px 0;
  text-align: center;
}

.newest-products h3 {
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
}

.newest-products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.newest-product {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  height: 100%;
}

.newest-product-item {
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.newest-product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.newest-product-item img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
}

.newest-product-item h4 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
}

.newest-product-item p {
  font-size: 1rem;
  color: #333;
  margin-bottom: auto;
}

.newest-product-btn-placeholder {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.newest-product-btn {
  background-color: #5f6622;
  color: white;
  border: none;
  padding: 10px 0;
  width: 100%;
  max-width: 100%;
  margin-bottom: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.newest-product-btn:hover {
  background-color: #3e7732;
  transform: scale(1.05);
}

.view-all-btn {
  background-color: #5f6622;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
}

.view-all-btn:hover {
  background-color: #3e7732;
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
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
.btn a {
  text-decoration: none;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
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
  margin-top: 100px;
}

.column {
  flex: 1;
  padding: 30px;
  border-radius: 8px;
  background-color: #ffffff;
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
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.forside-container-NaturligPleje {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  max-width: 1200px;
  margin: 0 auto;
}

.value-item {
  text-align: center;
  padding: 20px;
}

.value-item img {
  width: 100px;
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
.slideshow-section {
  text-align: center;
}

.slideshow-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.slideshow-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.slideshow-slide {
  display: none;
  transition: opacity 0.5s ease-in-out;
}

.slideshow-slide.active {
  display: block;
}

.slideshow-testimonial {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.slideshow-testimonial img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.slideshow-testimonial h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.slideshow-testimonial p {
  font-size: 1rem;
  line-height: 1.5;
}

.slideshow-controls {
  margin-top: 20px;
}

.slideshow-controls .slideshow-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.slideshow-controls .slideshow-dot.active {
  background-color: #557a4b;
}

.medisis-section {
  display: flex;
  gap: 40px;
  justify-content: center;
  padding: 40px;
}

.card {
  position: relative;
  height: 400px;

  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card h2 {
  color: #000000;
}

.card-button {
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: #5f6622;
  padding: 10px 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #3e7732;
}
.card-content a {
  text-decoration: none;
  color: white;
}

.view-all-btn a {
  text-decoration: none;
  color: white;
}

/* Skærmstørrelser på 1024px eller mindre (tablets og små laptops) */
@media (max-width: 1024px) {
  .forside-container {
    flex-direction: column;
    margin: 0 50px;
    gap: 50px;
  }

  .text-container {
    max-width: 100%;
    text-align: center;
  }

  .text-container h1 {
    font-size: 35px;
  }

  .two-columns .column {
    text-align: center;
    flex-direction: column;
  }
  .two-columns {
    flex-direction: column;
  }
}

/* Skærmstørrelser på 768px eller mindre (tablets) */
@media (max-width: 768px) {
  .forside-container {
    margin: 0 20px;
    gap: 20px;
  }

  .text-container h1 {
    font-size: 28px;
  }

  .image-container img {
    max-width: 90%;
  }

  .popular-products {
    grid-template-columns: 1fr 1fr;
  }
  .forside-container-NaturligPleje img {
    display: none;
  }
  .two-columns {
    text-align: center;
    margin: 0 0px;
    justify-content: center;
    flex-direction: column;
  }
}

/* Skærmstørrelser på 480px eller mindre (mobiltelefoner) */
@media (max-width: 480px) {
  .forside-container {
    margin: 0 10px;
    gap: 10px;
  }

  .text-container h1 {
    font-size: 22px;
  }

  .popular-products {
    grid-template-columns: 1fr;
  }

  .values-section .values-container {
    grid-template-columns: 1fr;
  }

  .slideshow-container img {
    width: 100%;
  }

  .medisis-section .card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
