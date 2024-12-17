<template>
    <div>
      <h2>Produkter</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
  {{ product.name }} - {{ product.price }} kr.
  <img v-if="product.images && product.images.length" 
       :src="product.images[0].src" 
       :alt="product.name" 
       width="150" />
</li>

      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const products = ref([]);
  
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            "https://medisis.magnusnoerlev.com/wp-json/wc/v3/products",
            {
              auth: {
                username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692", // API Consumer Key
                password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2", // API Consumer Secret
              },
            }
          );
          products.value = response.data;
        } catch (error) {
          console.error("Fejl ved hentning af produkter:", error);
        }
      };
  
      onMounted(fetchProducts);
  
      return { products };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
  </style>
  