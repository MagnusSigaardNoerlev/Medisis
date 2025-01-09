<template>
  <section class="sideIndhold">
    <div class="forside-container">
      <div class="text-container">
        <h1>Kvalitetsprodukter til din virksomhed</h1>
        <p>
          Klar til at levere produkter, der gør en forskel for din virksomhed.
        </p>
      </div>
      <div class="image-container">
        <img src="@/assets/KvindeH.jpg" alt="Medisis Produkter" />
      </div>
    </div>
    <section class="values-section">
      <h2>Fordele for erhvervskunder</h2>
      <div class="values-container">
        <div class="value-item">
          <img src="@/assets/kasse-ikon.png" alt="Genbrugsplast ikon" />
          <h4>Tilpassede løsningerløsninger</h4>
          <p>
            Vi forstår, at hver virksomhed har unikke behov. Derfor tilbyder vi
            hos Medisis løsninger, der matcher netop jeres ønsker. Uanset om det
            handler om specialtilpassede produkter, private label-muligheder
            eller specifikke leveringsaftaler, arbejder vi tæt sammen med jer
            for at skabe den perfekte løsning til jeres kunder eller
            medarbejdere."
          </p>
        </div>
        <div class="value-item">
          <img
            src="@/assets/baeredygtighed-ikon.png"
            alt="Ægte produkter ikon"
          />
          <h4>Høj kvalitet og bæredygtighed</h4>
          <p>
            Hos Medisis er kvalitet og bæredygtighed kernen i alt, hvad vi gør.
            Vores produkter er fremstillet af nøje udvalgte ingredienser, hvor
            fokus er på naturlige og miljøvenlige materialer. Vi sikrer, at hver
            eneste vare lever op til høje standarder for både effektivitet og
            ansvarlighed.
          </p>
        </div>
        <div class="value-item">
          <img src="@/assets/levering-ikon.png" alt="God kundeservice ikon" />
          <h4>Hurtig levering</h4>
          <p>
            Hos Medisis bliver ordrer typisk sendt inden for 1-2 hverdage.
            Leveringstiden afhænger af fragtfirmaet, men forventes normalt at
            være 2-5 hverdage.
          </p>
        </div>
      </div>
    </section>

    <!-- Sektion med produktkategorier -->
    <section class="produktkategorier">
      <h3>Produktoversigt</h3>
      <ul>
        <!-- Her looper vi gennem kategorierne og viser dem som cards -->
        <li v-for="kategori in kategorier" :key="kategori.id">
          <router-link :to="'/produkter/' + kategori.id" class="kategoriCard">
            <!-- Viser billedet og navnet på hver kategori -->
            <img :src="kategori.image" :alt="kategori.name" />
            <div class="kateogriCard-content">
              <h4>{{ kategori.name }}</h4>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="proevepakke-sektion">
      <div class="tekst-indhold">
        <h2>Prøv vores prøvepakker og oplev forskellen</h2>
        <p>
          Medisis tilbyder tilpassede prøvepakker, så I kan teste vores
          produkter, før I træffer en endelig beslutning. Vores prøvepakker
          giver jer mulighed for at opleve kvaliteten, designet og
          funktionaliteten af vores løsninger – helt uden binding. Kontakt os i
          dag og lad os sammensætte en pakke, der matcher jeres behov.
        </p>
      </div>
      <div class="billede-indhold">
        <div class="billede-container">
          <img src="@/assets/pravepakke.png" alt="Massageolie prøvepakke" />
        </div>
        <div class="pakke-detaljer">
          <h3>Massageolie prøvepakke</h3>
          <button>Bestil prøve pakke</button>
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
    <section class="medisis-section">
      <div class="card">
        <img
          src="@/assets/om-medisis.png"
          alt="Om Medisis"
          class="card-image"
        />
        <div class="card-content">
          <h1>OM MEDISIS</h1>
          <a href="#" class="card-button"
            ><router-link to="/om-medisis"
              >Læs mere om Medisis her</router-link
            ></a
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script>
// Importerer Axios til at lave API-kald
import axios from "axios";
// Importerer ikoner, der bruges i FAQ-sektionen
import kortIkon from "@/assets/kasse-ikon.png";
import returIkon from "@/assets/undo-solid.png";
import leveringIkon from "@/assets/baeredygtighed-ikon.png";

// Her definerer komponentens props
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    // Her returneres et objekt, der indeholder komponentens startdata.
    return {
      product: null, // Her gemmes oplysninger om produktet hentet fra API'et
      variants: [], // Indeholder forskellige varianter af produktet
      selectedVariant: null, // Holder styr på den valgte variant
      loading: true, // Indikerer, om data stadig indlæses
      error: null, // Her gemmes eventuelle fejlmeddelelser fra API-kald
      kategorier: [], // Her gemmer vi de kategorier, vi henter fra API'et
      faq: [
        {
          id: 1,
          ikon: kortIkon,
          overskrift: "Kan vi få adgang til produktprøver?",
          beskrivelse:
            "Ja, det kan I godt. Vi tilbyder gerne produktprøver, så I kan vurdere kvaliteten af vores produkter. I kan kontakte os for at aftale detaljerne, og vi vil sørge for at sende de ønskede prøver til jer. Hvis I har specifikke produkter, I er interesserede i at prøve, så lad os gerne vide det!",
        },
        {
          id: 2,
          ikon: returIkon,
          overskrift: "Hvordan kontakter vi jer?",
          beskrivelse:
            "Kontakt os venligst på info@medisis.dk eller telefon 86 46 72 15",
        },
        {
          id: 3,
          ikon: leveringIkon,
          overskrift: "Allergi",
          beskrivelse:
            "Vores produkter er udviklet med få ingredienser og rene råvarer for at minimere risikoen for allergiske reaktioner. De er helt fri for parfume.",
        },
      ],
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
.forside-container {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 100px;
}

.text-container {
  max-width: 50%;
}

.text-container h1 {
  font-size: 45px;
  margin-bottom: 10px;
  margin-top: 0;
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.image-container img {
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

.kategoriCard {
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

.kategoriCard:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.kategoriCard img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 0;
}

.kategoriCard-content {
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: white;
  transition: background-color 0.3s ease;
}

.proevepakke-sektion {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
  margin-top: 40px;
}

.tekst-indhold h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.tekst-indhold p {
  font-size: 1rem;
  line-height: 1.6;
}

.billede-indhold {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.billede-container img {
  max-width: 450px;
  max-height: 500px;
  height: auto;
}

.pakke-detaljer h3 {
  margin-bottom: 10px;
  margin-top: 10px;
}
.pakke-detaljer {
  background-color: white;
  width: 450px;
  text-align: center;
}

.pakke-detaljer button {
  background-color: #6b7849;
  color: white;
  border: none;
  padding: 10px 20px;
  width: 450px;
  margin-top: 10px;
  cursor: pointer;
}

.pakke-detaljer button:hover {
  background-color: #3e7732;
}

.values-section {
  text-align: center;
  padding: 50px 20px;
}

.values-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.values-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.value-item {
  padding: 20px;
}

.value-item img {
  width: 100px;
  height: auto;
}

.value-item h3 {
  margin-bottom: 15px;
}

.value-item p {
  line-height: 1.5;
  color: #333;
  text-align: left;
}

/* FAQ sektion */
.faq {
  padding: 40px 0;
  text-align: center;
}

.faq h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.faq-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.kort {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 300px;
  text-align: left;
  flex: 1;
  border-radius: 5px;
}

.ikon img {
  display: block;
  margin: 0 auto;
  width: 60px;
  height: auto;
  object-fit: contain;
}

.kort h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.kort p {
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
}

.medisis-section {
  display: flex;
  gap: 40px;
  justify-content: center;
  padding: 40px;
}

.card {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card h2 {
  color: #000000;
}

.card-button {
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: #5f6622;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #3e7732;
}
.card-button a {
  text-decoration: none;
  color: white;
}

/* Media Queries */

@media (max-width: 1024px) {
  .forside-container {
    flex-direction: column;
    text-align: center;
    margin: 0 50px;
    gap: 50px;
  }

  .text-container {
    max-width: 100%;
  }

  .proevepakke-sektion {
    grid-template-columns: 1fr;
  }

  .faq-container {
    flex-direction: column;
    align-content: center;
  }

  .produktkategorier li {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

/* Mobiltelefoner (480px) */
@media (max-width: 480px) {
  .text-container h1 {
    font-size: 28px;
  }

  .faq-container {
    flex-direction: column;
  }
  .produktkategorier ul {
    flex-direction: column;
    align-items: center;
  }
  .kategoriCard img {
    height: 200px;
    width: 400px;
  }
}
</style>
