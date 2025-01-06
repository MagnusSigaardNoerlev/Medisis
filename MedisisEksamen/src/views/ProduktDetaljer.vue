<template>
  <div class="popular-products">
    <h2>Produkter for kategori: {{ id }}</h2>
    <div v-if="loading" class="loading">Indlæser produkter...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else class="products-container">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.images[0]?.src || '/src/assets/default-product.jpg'" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} kr</p>
        <button class="product-btn">Se detaljer</button>
      </div>
    </div>
  </div>
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
    const loading = ref(true);
    const error = ref(null);

    const fetchProducts = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products?category=${props.id}`,
          {
            auth: {
              username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
              password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
            },
          }
        );
        products.value = response.data;
      } catch (err) {
        error.value = "Fejl ved hentning af produkter: " + err.message;
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchProducts);
    watch(() => props.id, fetchProducts);

    return { products, loading, error };
  },
};
</script>

<style scoped>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Sørg for, at alt er jævnt fordelt */
}

.product-item img {
  width: 100%;
  height: 200px; /* Sætter en fast højde for alle billeder */
  object-fit: cover; /* Sørger for, at billeder fylder hele området uden at forvrænge proportionerne */
  margin-bottom: 20px;
}

.product-item h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  min-height: 60px; /* Sikrer, at alle overskrifter har samme højde */
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
</style>
