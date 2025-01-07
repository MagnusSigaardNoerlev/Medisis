<template>
  <h2>{{ categoryName }}</h2>
  <p v-if="categoryDescription" class="category-description">{{ categoryDescription }}</p>
  <section class="products">
    <div v-if="loading" class="loading">Indlæser produkter...</div>
    <div v-else class="products-container">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/produkt/${product.id}`"
        class="product-item"
      >
        <img :src="product.images[0]?.src" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} kr</p>
        <button class="product-btn">Tilføj til kurv</button>
      </router-link>
    </div>
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
            }
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
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products?category=${props.id}`,
          {
            auth: {
              username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
              password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
            }
          }
        );
        products.value = response.data;
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

    watch(() => props.id, () => {
      fetchCategoryDetails(); // Opdater kategorioplysninger
      fetchProducts(); // Opdater produkter
    });

    return { products, categoryName, categoryDescription, loading, error };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
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

.product-item {
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.product-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}

.product-item h3 {
  font-size: 1.8rem;
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
}

.product-btn {
  width: 100%;
  background-color: #5f6622;
  color: white;
  border: none;
  padding: 10px 0;
  cursor: pointer;
  margin-top: 10px;
  pointer-events: none; /* Knappen gør ikke noget */
}

.product-btn:hover {
  background-color: #3e7732;
}

.category-description {
  text-align: left;
  padding: 0 250px;
  margin-bottom: 75px;
}
</style>
