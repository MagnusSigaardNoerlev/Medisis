<template>
    <div v-if="loading" class="loading">Indlæser produkt...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <section v-else class="product-detail">
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
    </section>
  
    <!-- FAQ sektion -->
    <section class="faq">
      <h2>Ofte stillede spørgsmål</h2>
      <div class="faq-container">
        <div class="kort" v-for="item in faq" :key="item.id">
          <div class="ikon">
            <img :src="item.ikon" :alt="item.overskrift" />
          </div>
          <h3>{{ item.overskrift }}</h3>
          <p>{{ item.beskrivelse }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from "axios";
  import kortIkon from "@/assets/credit-card-solid.png";
  import returIkon from "@/assets/undo-solid.png";
  import leveringIkon from "@/assets/levering-ikon.png";
  
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        product: null,
        variants: [],
        selectedVariant: null,
        loading: true,
        error: null,
        faq: [
          {
            id: 1,
            ikon: kortIkon,
            overskrift: "Hvilke betalingsmetoder accepterer I?",
            beskrivelse:
              "Medisis accepterer betaling med Dankort. Det er helt sikkert at handle hos Medisis, da vi sikrer, at dine betalingsoplysninger bliver behandlet trygt. Hvis du har spørgsmål eller problemer med betaling, kan du altid kontakte os på info@medisis.dk.",
          },
          {
            id: 2,
            ikon: returIkon,
            overskrift: "Hvad er jeres returpolitik?",
            beskrivelse:
              "Medisis tilbyder 14 dages returret på uåbnede og ubeskadigede produkter. Kontakt os venligst på info@medisis.dk eller telefon 86 46 72 15 for at arrangere en returnering.",
          },
          {
            id: 3,
            ikon: leveringIkon,
            overskrift: "Hvor lang er leveringstiden?",
            beskrivelse:
              "Hos Medisis bliver ordrer typisk sendt inden for 1-2 hverdage. Leveringstiden afhænger af fragtfirmaet, men forventes normalt at være 2-5 hverdage.",
          },
        ],
      };
    },
    computed: {
      sortedVariants() {
        return [...this.variants].sort((a, b) => {
          const valueA = parseFloat(a.attributes[0]?.option.replace("L", "").trim());
          const valueB = parseFloat(b.attributes[0]?.option.replace("L", "").trim());
          return valueA - valueB;
        });
      },
    },
    methods: {
      async fetchProduct() {
        try {
          this.loading = true;
          const response = await axios.get(
            `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${this.id}`,
            {
              auth: {
                username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
                password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
              }
            }
          );
          this.product = response.data;
  
          // Hent variationer, hvis produktet er variabelt
          if (this.product.type === "variable") {
            const variationsResponse = await axios.get(
              `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${this.id}/variations`,
              {
                auth: {
                  username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
                  password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
                }
              }
            );
            this.variants = variationsResponse.data;
          }
        } catch (err) {
          console.error("Fejl ved hentning af produkt:", err);
          this.error = "Kunne ikke hente produktdata.";
        } finally {
          this.loading = false;
        }
      },
      selectVariant(variant) {
        this.selectedVariant = variant;
      },
    },
    mounted() {
      this.fetchProduct();
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
  
  /* FAQ sektion */
  .faq {
    padding: 40px 20px;
    text-align: center;
  }
  
  .faq h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .faq-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .kort {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 40px;
    max-width: 300px;
    flex: 1;
    text-align: left;
  }
  
  .ikon {
    text-align: center;
    margin-bottom: 15px;
  }
  
  .ikon img {
    width: 60px;
    height: auto;
  }
  
  .kort h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
    text-align: center;
  }
  
  .kort p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #666;
  }
  </style>
  