<template>
  <section class="sideIndhold">
    <!-- Kategori-sektion -->
    <section class="products">
      <!-- Her hentes produktkategorien dynamisk med vue's mustage syntaksen -->
      <h2>{{ categoryName }}</h2>

      <!-- Her vises kategoribeskrivelsen -->
      <p v-if="categoryDescription" class="category-description">
        {{ categoryDescription }}
      </p>

      <!-- Loading-indikator vises, mens produkterne indlæses -->
      <div v-if="loading" class="loading">Indlæser produkter...</div>

      <!-- Når produkterne er indlæst, vises produktcardsne -->
      <div v-else class="products-container">
        <!-- Her loopes der gennem produkterne med v-for -->
        <div class="product-card" v-for="product in products" :key="product.id">
          <!-- Router-link til produktsiden -->
          <router-link :to="`/produkt/${product.id}`" class="product-item">
            <img :src="product.images[0]?.src" :alt="product.name" />
            <!-- Her bliver produktnavn og prisspænd dynamisk sat ind -->
            <h3>{{ product.name }}</h3>
            <p>{{ product.priceRange }}</p>
          </router-link>

          <!-- "Tilføj til kurv"-knap -->
          <div class="product-btn-placeholder">
            <button class="product-btn">Tilføj til kurv</button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios"; // Her importerer vi axios til at lave API-kald
import { ref, onMounted, watch } from "vue"; // Her importeres vue-funktioner til at håndtere reaktive data

export default {
  props: {
    id: {
      type: String, // Modtager kategori-ID som en prop fra routeren
      required: true,
    },
  },
  setup(props) {
    const products = ref([]); // Liste over produkter
    const categoryName = ref(""); // Navnet på den valgte kategori
    const categoryDescription = ref(""); // Beskrivelse af kategorien
    const loading = ref(true); // Indikerer om data stadig indlæses
    const error = ref(null); // Gemmer fejlmeddelelser

    // Henter detaljer om kategorien
    const fetchCategoryDetails = async () => {
      try {
        const response = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/categories/${props.id}`,
          {
            auth: {
              username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
              password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
            },
          }
        );
        categoryName.value = response.data.name; // Sætter kategorinavnet
        categoryDescription.value = response.data.description; // Sætter kategoribeskrivelsen
      } catch (err) {
        console.error("Fejl ved hentning af kategori:", err);
        error.value = "Fejl ved hentning af kategori.";
      }
    };

    // Henter produkter til den valgte kategori
    const fetchProducts = async () => {
      try {
        loading.value = true; // Viser loading-indikator
        const response = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products?category=${props.id}&per_page=20`,
          {
            auth: {
              username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
              password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
            },
          }
        );

        // Gennemgår hver produkt og beregner prisspænd
        const productsWithPrices = await Promise.all(
          response.data.map(async (product) => {
            if (product.variations && product.variations.length > 0) {
              const variationsResponse = await axios.get(
                `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${product.id}/variations`,
                {
                  auth: {
                    username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
                    password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
                  },
                }
              );

              // Finder minimum og maksimumpris for variationer
              const prices = variationsResponse.data.map((variation) =>
                parseFloat(variation.price)
              );
              const minPrice = Math.min(...prices);
              const maxPrice = Math.max(...prices);

              // Returnerer produktet med prisspænd
              return {
                ...product,
                priceRange: `${minPrice} - ${maxPrice} kr`,
              };
            } else {
              // Hvis produktet ikke har variationer, bruges standardpris
              return {
                ...product,
                priceRange: `${product.price} kr`,
              };
            }
          })
        );

        products.value = productsWithPrices; // Sætter produkterne
      } catch (err) {
        console.error("Fejl ved hentning af produkter:", err);
        error.value = "Fejl ved hentning af produkter.";
      } finally {
        loading.value = false; // Fjerner loading-indikator
      }
    };

    // Denne funktion kører automatisk, når siden vises, og vi bruger den til at hente data til kategorier og produkter.
    onMounted(() => {
      fetchCategoryDetails();
      fetchProducts();
    });

    // Overvåger ændringer i kategori-ID og opdaterer data
    watch(
      () => props.id,
      () => {
        fetchCategoryDetails();
        fetchProducts();
      }
    );

    return { products, categoryName, categoryDescription, loading, error }; // Returnerer variabler
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

.category-description {
  text-align: left;
  margin-left: 350px;
  margin-right: 350px;
  margin-bottom: 75px;
}

.products .loading {
  text-align: center;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 75px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  height: 100%;
}

.product-item {
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

.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.product-item img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
}

.product-item h3 {
  margin-bottom: 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
}

.product-item p {
  font-size: 1rem;
  color: #333;
  margin-bottom: auto;
}

.product-btn-placeholder {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.product-btn {
  background-color: #5f6622;
  color: white;
  border: none;
  padding: 10px 0;
  width: 100%;
  max-width: 100%;
  margin-bottom: 50px;
}

.product-btn:hover {
  background-color: #3e7732;
}

/* media qurrys */

@media (max-width: 1024px) {
  .products-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .category-description {
    margin-left: 0;
    margin-right: 0;
  }
}
@media (max-width: 480px) {
  .products-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    justify-content: center;
  }
  .category-description {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
