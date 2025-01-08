<template>
  <section class="sideIndhold">
    <section class="products">
      <h2>{{ categoryName }}</h2>
      <p v-if="categoryDescription" class="category-description">
        {{ categoryDescription }}
      </p>
      <div v-if="loading" class="loading">Indlæser produkter...</div>
      <div v-else class="products-container">
        <div class="product-card" v-for="product in products" :key="product.id">
          <!-- Router-link til produkt -->
          <router-link :to="`/produkt/${product.id}`" class="product-item">
            <img :src="product.images[0]?.src" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.priceRange }}</p>
          </router-link>

          <!-- Tilføj til kurv knap uden for produktcontaineren -->
          <div class="product-btn-placeholder">
            <button class="product-btn">Tilføj til kurv</button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import { ref, onMounted, watch } from "vue";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const products = ref([]);
    const categoryName = ref("");
    const categoryDescription = ref("");
    const loading = ref(true);
    const error = ref(null);

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
        categoryName.value = response.data.name;
        categoryDescription.value = response.data.description;
      } catch (err) {
        console.error("Fejl ved hentning af kategori:", err);
        error.value = "Fejl ved hentning af kategori.";
      }
    };

    const fetchProducts = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products?category=${props.id}&per_page=20`,
          {
            auth: {
              username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
              password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
            },
          }
        );

        // Hent variationer for hvert produkt og beregn prisspænd
        const productsWithPrices = await Promise.all(
          response.data.map(async (product) => {
            if (product.variations && product.variations.length > 0) {
              // Hent variationer
              const variationsResponse = await axios.get(
                `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${product.id}/variations`,
                {
                  auth: {
                    username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
                    password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
                  },
                }
              );

              const prices = variationsResponse.data.map((variation) =>
                parseFloat(variation.price)
              );
              const minPrice = Math.min(...prices);
              const maxPrice = Math.max(...prices);

              return {
                ...product,
                priceRange: `${minPrice} - ${maxPrice} kr`,
              };
            } else {
              // Hvis der ikke er variationer, brug standardpris
              return {
                ...product,
                priceRange: `${product.price} kr`,
              };
            }
          })
        );

        products.value = productsWithPrices;
      } catch (err) {
        console.error("Fejl ved hentning af produkter:", err);
        error.value = "Fejl ved hentning af produkter.";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchCategoryDetails(); // Henter kategorioplysninger
      fetchProducts(); // Henter produkter
    });

    watch(
      () => props.id,
      () => {
        fetchCategoryDetails(); // Opdater kategorioplysninger
        fetchProducts(); // Opdater produkter
      }
    );

    return { products, categoryName, categoryDescription, loading, error };
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
