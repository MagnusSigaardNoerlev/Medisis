<template>
    <div v-if="loading" class="loading">Indlæser produkt...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="product-detail">
      <div class="product-header">
        <img :src="product.images[0]?.src" :alt="product.name" />
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <div v-if="product.variations && product.variations.length > 0" class="variants">
            <ul>
              <li v-for="variant in sortedVariants" :key="variant.id">
                <button
                  @click="selectVariant(variant)"
                  :class="{ active: selectedVariant?.id === variant.id }"
                >
                  {{ variant.attributes[0]?.option }}
                </button>
              </li>
            </ul>
          </div>
          <p v-if="product.description" v-html="product.description"></p>
          <h2>{{ selectedVariant?.price || product.price }} kr</h2>
          <p class="moms">Inkl. moms</p>
          <div class="product-indeholder">
            <h3>Indeholder:</h3>
            <div class="contains-content" v-html="product.short_description"></div>
          </div>
        </div>
      </div>
    </div>
  </template>  
  
  <script>
  import axios from "axios";
  import { ref, computed, onMounted } from "vue";
  
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
  
      const sortedVariants = computed(() => {
        return [...variants.value].sort((a, b) => {
          const valueA = parseFloat(a.attributes[0]?.option.replace("L", "").trim());
          const valueB = parseFloat(b.attributes[0]?.option.replace("L", "").trim());
          return valueA - valueB;
        });
      });
  
      const selectVariant = (variant) => {
        selectedVariant.value = variant;
      };
  
      onMounted(fetchProduct);
  
      return { product, sortedVariants, selectedVariant, loading, error, selectVariant };
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
  max-width: 1200px;
  margin: 20px auto;
}

.product-header {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 75px;
}

.product-header img {
  max-width: 300px;
  border: 1px solid #5e6622;
}

.product-info h1 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.variants {
  margin: 10px 0 20px;
}

.variants ul {
  display: flex;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.variants ul li:hover {
  transform: scale(1.05);
}

.variants button {
  background-color: #5f6622;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.variants button.active {
  background-color: #3e7732;
}

.product-info p {
  margin-bottom: 20px;
  max-width: 60ch;
}

.product-info h2 {
  font-size: 1.5rem;
  color: #5f6622;
}

.product-indeholder {
  margin-top: 20px;
}

.product-indeholder h3 {
  margin-bottom: 10px;
}

.moms {
    padding: 0;
    margin: 0;
}

h2 {
    margin-bottom: 0;
}
  </style>
  