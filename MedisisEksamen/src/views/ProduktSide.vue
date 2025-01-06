<template>
    <div v-if="loading" class="loading">Indlæser produkt...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="product-detail">
      <h1>{{ product.name }}</h1>
      <img :src="product.images[0]?.src || '/src/assets/default-product.jpg'" :alt="product.name" />
      <p v-if="product.description" v-html="product.description"></p>
      <p>{{ product.price }} kr</p>
  
      <!-- Hvis produktet har variable egenskaber som vægt -->
      <div v-if="product.variations && product.variations.length > 0">
        <h3>Vælg en variant:</h3>
        <ul>
          <li v-for="variant in variants" :key="variant.id">
            <button @click="selectVariant(variant)">{{ variant.attributes[0]?.option }} - {{ variant.price }} kr</button>
          </li>
        </ul>
      </div>
  
      <div v-else>
        <button class="add-to-cart">Tilføj til kurv</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { ref, onMounted } from "vue";
  
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const product = ref(null);
      const variants = ref([]);
      const selectedVariant = ref(null);
      const loading = ref(true);
      const error = ref(null);
  
      const fetchProduct = async () => {
        try {
          loading.value = true;
          const response = await axios.get(
            `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${props.id}`,
            {
              auth: {
                username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
                password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
              }
            }
          );
          product.value = response.data;
  
          // Hent variationer, hvis produktet er variabelt
          if (product.value.type === "variable") {
            const variationsResponse = await axios.get(
              `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${props.id}/variations`,
              {
                auth: {
                  username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
                  password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
                }
              }
            );
            variants.value = variationsResponse.data;
          }
        } catch (err) {
          console.error("Fejl ved hentning af produkt:", err);
          error.value = "Kunne ikke hente produktdata.";
        } finally {
          loading.value = false;
        }
      };
  
      const selectVariant = (variant) => {
        selectedVariant.value = variant;
      };
  
      onMounted(fetchProduct);
  
      return { product, variants, selectedVariant, loading, error, selectVariant };
    },
  };
  </script>
  
  <style scoped>
  .loading,
  .error {
    text-align: center;
    margin-top: 20px;
  }
  
  .product-detail {
    text-align: center;
    margin: 20px;
  }
  
  .product-detail img {
    max-width: 300px;
    margin-bottom: 20px;
  }
  
  .add-to-cart {
    background-color: #5f6622;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .add-to-cart:hover {
    background-color: #3e7732;
  }
  </style>
  