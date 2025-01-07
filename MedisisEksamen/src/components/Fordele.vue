<template>
  <section class="fordele">
    <h2>Fordele for erhvervskunder</h2>
    <div class="fordele-container">
      <div class="kort" v-for="fordel in fordele" :key="fordel.id">
        <div class="ikon">
          <img :src="fordel.ikon" :alt="fordel.overskrift" />
        </div>
        <h3>{{ fordel.overskrift }}</h3>
        <p>{{ fordel.beskrivelse }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import KasseIkon from "@/assets/kasse-ikon.png";
import BaeredygtighedIkon from "@/assets/baeredygtighed-ikon.png";
import leveringikon from "@/assets/leveringikon.png";

export default {
  name: "FordeleSection",
  data() {
    return {
      fordele: [
        {
          id: 1,
          ikon: KasseIkon,
          overskrift: "Tilpassede løsninger",
          beskrivelse:
            "Vi forstår, at hver virksomhed har unikke behov. Derfor tilbyder vi hos Medisis løsninger, der matcher netop jeres ønsker. Uanset om det handler om specialtilpassede produkter, private label-muligheder eller specifikke leveringsaftaler, arbejder vi tæt sammen med jer for at skabe den perfekte løsning til jeres kunder eller medarbejdere.",
        },
        {
          id: 2,
          ikon: BaeredygtighedIkon,
          overskrift: "Høj kvalitet og bæredygtighed",
          beskrivelse:
            "Hos Medisis er kvalitet og bæredygtighed kernen i alt, hvad vi gør. Vores produkter er fremstillet af nøje udvalgte ingredienser, hvor fokus er på naturlige og miljøvenlige materialer. Vi sikrer, at hver eneste vare lever op til høje standarder for både effektivitet og ansvarlighed.",
        },
        {
          id: 3,
          ikon: leveringikon,
          overskrift: "Hurtig levering",
          beskrivelse:
            "Hos Medisis bliver ordrer typisk sendt inden for 1-2 hverdage. Leveringstiden afhænger af fragtfirmaet, men forventes normalt at være 2-5 hverdage.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fordele {
  padding: 40px 20px;
  text-align: center;
}

.fordele h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.fordele-container {
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
