<template>
    <section class="sideIndhold">
      <!-- Vi viser en loading tekst, hvis data stadig indlæses -->
      <div v-if="loading" class="loading">Indlæser produkt...</div>
  
      <!-- Når data er indlæst, vises produktdetaljerne -->
      <section v-else class="product-detail">
        <div class="product-header">
          <!-- Produktbillede og galleri -->
          <div class="product-image-container">
            <!-- Hovedbillede -->
            <img :src="mainImage" alt="Produktbillede" class="main-image" />
  
            <!-- Galleribilleder -->
            <div class="product-gallery">
              <img
                v-for="(galleryImage, index) in product.images"
                :key="index"
                :src="galleryImage.src"
                :alt="galleryImage.alt"
                @click="selectGalleryImage(galleryImage.src)"
                :class="[
                  'gallery-thumbnail',
                  { active: galleryImage.src === selectedImage }
                ]"
              />
            </div>
          </div>
  
          <!-- Produktinformation -->
          <div class="product-info">
            <h1>{{ product.name }}</h1>
  
            <!-- Produktvarianter -->
            <div
              v-if="product.variations && product.variations.length > 0"
              class="variants"
            >
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
  
            <!-- Produktbeskrivelse -->
            <p v-if="product.description" v-html="product.description"></p>
  
            <!-- Produktpris -->
            <h2>{{ selectedVariant?.price || product.price }} kr</h2>
            <p class="moms">Inkl. moms</p>
  
            <!-- Produktindhold -->
            <div class="product-indeholder">
              <h3>Indeholder:</h3>
              <div
                class="contains-content"
                v-html="product.short_description"
              ></div>
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
  
      <!-- Relaterede produkter -->
      <section class="related-products">
        <h2>Du ville måske synes om:</h2>
        <div class="related-products-container">
          <!-- Loop gennem relaterede produkter -->
          <div
            class="related-product"
            v-for="related in relatedProducts"
            :key="related.id"
          >
            <!-- Link til produktdetaljeside -->
            <router-link
              :to="{ name: 'ProduktSide', params: { id: related.id } }"
              class="related-product-item"
            >
              <img :src="related.images[0]?.src" :alt="related.name" />
              <h3>{{ related.name }}</h3>
              <!-- Viser prisspænd eller standardpris -->
              <p>
                {{ related.priceRange || `${related.price} kr` }}
              </p>
            </router-link>
  
            <!-- "Tilføj til kurv"-knap -->
            <div class="related-product-btn-placeholder">
              <button class="related-product-btn">Tilføj til kurv</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </template>
  

  <script>
// Importerer Axios til API-kald og ikoner til brug i FAQ-sektionen
import axios from "axios";
import kortIkon from "@/assets/credit-card-solid.png";
import returIkon from "@/assets/undo-solid.png";
import leveringIkon from "@/assets/levering-ikon.png";

// Her gemmer vi API-autorisering som en konstant
const API_AUTH = {
  username: "ck_3d9e99e11d33b04135d3fcc9366920ff0e04a692",
  password: "cs_1207b0416dac2f9412347e9cf80a3714a3a33ef2",
};

export default {
  // Props til at få produkt-ID fra routeren
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null, // Her gemmes data om det aktuelle produkt
      variants: [], // Liste over produktets varianter (hvis nogen)
      selectedVariant: null, // Den valgte variant af produktet
      selectedImage: null, // Det billede, som brugeren aktuelt har valgt at se
      loading: true, // Indikerer, om produktdata er ved at blive indlæst
      relatedProducts: [], // Liste over relaterede produkter til det aktuelle produkt
      faq: [
        // Data til FAQ-sektionen
        {
          id: 1,
          ikon: kortIkon,
          overskrift: "Hvilke betalingsmetoder accepterer I?",
          beskrivelse:
            "Medisis accepterer betaling med Dankort. Det er helt sikkert at handle hos Medisis, da vi sikrer, at dine betalingsoplysninger bliver behandlet trygt.",
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
    // Sorterer produktvarianter baseret på størrelse eller værdi
    sortedVariants() {
      return [...this.variants].sort((a, b) => {
        const valueA = parseFloat(
          a.attributes[0]?.option.replace(",", ".").replace("L", "").trim()
        );
        const valueB = parseFloat(
          b.attributes[0]?.option.replace(",", ".").replace("L", "").trim()
        );
        return valueA - valueB;
      });
    },
    // Returnerer det aktuelle varebillede (valgt billede, variantbillede, eller standardbillede)
    mainImage() {
      return (
        this.selectedImage ||
        this.selectedVariant?.image?.src ||
        this.product?.images[0]?.src
      );
    },
  },
  methods: {
    // Henter data om det aktuelle produkt fra API'et
    async fetchProduct() {
      try {
        this.loading = true;

        // Nulstil valgt variant og billede inden nyt produkt hentes
        this.selectedVariant = null;
        this.selectedImage = null;

        const response = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${this.id}`,
          { auth: API_AUTH }
        );
        this.product = response.data;

        // Hvis produktet har varianter, henter vi dem også
        if (this.product.type === "variable") {
          await this.fetchVariations();
        }

        // Henter relaterede produkter
        this.fetchRelatedProducts(this.product.categories[0]?.id);
      } catch (err) {
        console.error("Fejl ved hentning af produkt:", err);
        this.error = "Kunne ikke hente produktdata.";
      } finally {
        this.loading = false;
      }
    },
    // Henter varianter af det aktuelle produkt
    async fetchVariations() {
      try {
        const variationsResponse = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${this.id}/variations`,
          { auth: API_AUTH }
        );
        this.variants = variationsResponse.data;

        // Nulstil valgt variant, hvis der er varianter
        if (this.variants.length > 0) {
          this.selectedVariant = this.sortedVariants[0]; // Vælg den første (mindste) variant
          this.selectedImage = this.sortedVariants[0]?.image?.src || null;
        }
      } catch (err) {
        console.error("Fejl ved hentning af variationer:", err);
      }
    },
    // Henter relaterede produkter fra samme kategori og beregner prisspænd
    async fetchRelatedProducts(categoryId) {
      if (!categoryId) {
        console.error("Kategori-ID er ikke tilgængeligt for relaterede produkter.");
        return;
      }

      try {
        const response = await axios.get(
          `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products`,
          {
            auth: API_AUTH,
            params: {
              per_page: 4,
              exclude: [this.id],
              category: categoryId,
            },
          }
        );

        // Hent variationer for hvert produkt og beregn prisspænd
        const productsWithPrices = await Promise.all(
          response.data.map(async (product) => {
            if (product.type === "variable") {
              const variationsResponse = await axios.get(
                `https://medisis.magnusnoerlev.com/wp-json/wc/v3/products/${product.id}/variations`,
                { auth: API_AUTH }
              );

              const prices = variationsResponse.data.map((variation) =>
                parseFloat(variation.price)
              );
              const minPrice = Math.min(...prices);
              const maxPrice = Math.max(...prices);
              product.priceRange =
                minPrice === maxPrice
                  ? `${minPrice} kr`
                  : `${minPrice} - ${maxPrice} kr`;
            } else {
              product.priceRange = `${product.price} kr`;
            }
            return product;
          })
        );

        this.relatedProducts = productsWithPrices;
      } catch (err) {
        console.error("Fejl ved hentning af relaterede produkter:", err);
      }
    },
    // Opdaterer den valgte variant og dens billede
    selectVariant(variant) {
      this.selectedVariant = variant;
      this.selectedImage = variant.image?.src || null;
    },
    // Opdaterer det valgte billede, når der klikkes på et galleribillede
    selectGalleryImage(imageSrc) {
      this.selectedImage = imageSrc;
    },
  },
  watch: {
    // Overvåger ændringer i produkt-ID og henter nyt produktdata
    id: {
      immediate: true,
      handler() {
        this.fetchProduct();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
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
  gap: 120px;
}

.product-header img {
  max-width: 400px;
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
  margin: 0;
}

/* FAQ sektion */
.faq {
  padding: 40px 0;
  text-align: center;
}

.faq h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top: 40px;
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

.related-products {
  padding: 40px 0;
  text-align: center;
}

.related-products h2 {
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
}

.related-products-container {
  display: grid;
  grid-template-columns: repeat(
    4,
    1fr
  );
  gap: 20px;
  margin-bottom: 75px;
}

.related-product {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  height: 100%;
}

.related-product-item {
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

.related-product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.related-product-item img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
}

.related-product-item h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
}

.related-product-item p {
  font-size: 1rem;
  color: #333;
  margin-bottom: auto;
}

.related-product-btn-placeholder {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.related-product-btn {
  background-color: #5f6622;
  color: white;
  border: none;
  padding: 10px 0;
  width: 100%;
  max-width: 100%;
  margin-bottom: 50px;
}

.related-product-btn:hover {
  background-color: #3e7732;
}

.product-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-gallery {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.gallery-thumbnail {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.gallery-thumbnail:hover {
  border-color: #5f6622;
}

.gallery-thumbnail.active {
  border-color: #5f6622;
}
</style>
