<template>
  <section class="sideIndhold">
    <section class="intro">
      <div class="introText">
        <h1>Naturlig Kropspleje med Omtanke</h1>
        <p>
          Hos Medisis tilbyder vi et bredt udvalg af naturlige
          kropsplejeprodukter, der er skabt med omtanke for både dig og
          miljøet. Uanset om du søger massageolier, body lotions, eller
          produkter til afslappende fodbad, finder du her kvalitetsprodukter,
          der plejer din hud.
        </p>
      </div>
      <img src="@/assets/medisis-image.jpg" alt="Billede af produkter" />
    </section>

    <!-- Sektion med produktkategorier -->
    <section class="produktkategorier">
      <h3>Produktkategorier</h3>
      <ul>
        <!-- Her looper vi gennem kategorierne og viser dem som cards -->
        <li v-for="kategori in kategorier" :key="kategori.id">
          <router-link :to="'/produkter/' + kategori.id" class="card">
            <!-- Viser billedet og navnet på hver kategori -->
            <img :src="kategori.image" :alt="kategori.name" />
            <div class="card-content">
              <h4>{{ kategori.name }}</h4>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </section>
</template>


<script>
import axios from "axios"; // Importerer Axios til at lave API-kald

export default {
  name: "produkter", // Navn på komponenten
  data() {
    return {
      kategorier: [], // Her gemmer vi de kategorier, vi henter fra API'et
    };
  },
  mounted() {
    // Når siden indlæses, henter vi kategorier fra API'et
    this.fetchKategorier();
  },
  methods: {
    // Funktion til at hente kategorier fra WooCommerce API
    async fetchKategorier() {
      try {
        const response = await axios.get(
          "https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/categories",
          {
            auth: {
              // API-login til WooCommerce
              username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
              password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
            },
          }
        );

        // Filtrerer kategorierne for at fjerne "ukategoriseret" og formaterer data
        this.kategorier = response.data
          .filter((kategori) => kategori.slug !== "ukategoriseret") // Udelader ukategoriserede produkter
          .map((kategori) => ({
            id: kategori.id, // ID for kategorien
            name: kategori.name, // Navn på kategorien
            description: kategori.description, // Beskrivelse af kategorien
            image: kategori.image?.src, // Billede til kategorien
          }))
          .reverse(); // Vender rækkefølgen, så nyeste kategorier vises først
      } catch (error) {
        // Logger en fejl, hvis noget går galt
        console.error("Fejl ved hentning af kategorier:", error);
      }
    },
  },
};
</script>


<style scoped>
.intro {
  display: flex;
  align-items: center;
  gap: 100px;
}

.introText h1 {
  margin-bottom: 10px;
}

.intro img {
  max-width: 600px;
  max-height: 500px;
  height: auto;
}

.produktkategorier h3 {
  margin-top: 75px;
  text-align: center;
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
  background-color: white;
  transition: background-color 0.3s ease;
}
@media (max-width: 1024px) {
  .intro {
    flex-direction: column;
    text-align: center;
    gap: 0;
  }

  .intro img {
    order: 1;
    margin-top: 20px;
  }

  .introText {
    order: 0;
  }

  .produktkategorier ul {
    flex-direction: column;
  }

  .produktkategorier li {
    max-width: 100%;
    margin: 10px 0;
  }
}
@media (max-width: 768px) {
  .intro {
    flex-direction: column;
    text-align: center;
    gap: 0;
  }

  .intro img {
    order: 1;
    margin-top: 20px;
  }

  .introText {
    order: 0;
  }

  .produktkategorier ul {
    flex-direction: column;
  }

  .produktkategorier li {
    max-width: 100%;
    margin: 10px 0;
  }
}
</style>
