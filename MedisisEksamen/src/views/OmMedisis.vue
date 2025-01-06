<template>
  <div class="forside-container">
    <div class="text-container">
      <h1>Om Medisis</h1>
      <p>
        Medisis er en mindre producent, måske den mindste af denne type i
        Danmark. Derfor har Medisis et lille sortiment men med de bedste og ægte
        produkter.
      </p>
    </div>
    <div class="image-container">
      <img src="@/assets/Ommedisishus.png" alt="Medisis Produkter" />
    </div>
  </div>
  <section class="values-section">
    <h2>Vores værdier</h2>
    <div class="values-container">
      <div class="value-item">
        <img src="@/assets/recycle-icon.png" alt="Genbrugsplast ikon" />
        <h3>Genbrugsplast</h3>
        <p>
          Medisis er engageret i at beskytte miljøet, og derfor bruger vi så
          vidt muligt genbrugsplast i vores emballage. Ved at vælge
          genbrugsplast reducerer vi affald og minimerer forbruget af nye
          ressourcer.
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/natural-icon.png" alt="Ægte produkter ikon" />
        <h3>Ægte produkter</h3>
        <p>
          Medisis produkter er skabt med få ingredienser og rene råvarer for at
          sikre den højeste kvalitet. Vi tror på enkelhed og ægthed, hvilket
          afspejles i vores produkter, der er både effektive og naturlige.
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/service-icon.png" alt="God kundeservice ikon" />
        <h3>God kundeservice</h3>
        <p>
          Kundeservice er hjertet i vores virksomhed. Vi sætter en ære i at
          lytte til vores kunder, tilbyde tilpassede løsninger og sikre, at alle
          oplevelser med os er positive. Vi er her for at hjælpe og guide dig på
          hver eneste step.
        </p>
      </div>
      <div class="value-item">
        <img src="@/assets/environment-icon.png" alt="Miljøvenligt ikon" />
        <h3>Miljøvenligt</h3>
        <p>
          Vores miljøvenlige produkter hjælper med at reducere affald og
          CO2-udledning, samtidig med at du får kvalitetsvarer, der er både
          praktiske og bæredygtige. Gør en forskel med dine køb og vær med til
          at støtte en grønnere fremtid.
        </p>
      </div>
    </div>
  </section>
  <div class="forside-container">
    <div class="text-container">
      <h1>Historien om Medisis</h1>
      <p>
        Medisis har eksisteret siden 1985 og blev gundlagt af farmaceut Grethe
        Karst. Hun var en del af et forskningsprojekt i hudpleje på Århus
        universitetshospital, hvor de udviklede 15 forskellige massageprodukter.
        <br />
        <br />
        Mange af disse produkter sælges stadig hos Medisis. Grethe udvidede
        sortimentet og begyndte at sælge til professionelle behandlere. Da Bente
        overtog firmaet i 2009 begynde hun at udvide ved at lave private label
        for en del kunder.
      </p>
    </div>
    <div class="image-container">
      <img src="@/assets/Historien.png" alt="Medisis Produkter" />
    </div>
  </div>
  <div class="forside-container">
    <div class="text-container">
      <h1>Historien om Medisis</h1>
      <p>
        Medisis har eksisteret siden 1985 og blev gundlagt af farmaceut Grethe
        Karst. Hun var en del af et forskningsprojekt i hudpleje på Århus
        universitetshospital, hvor de udviklede 15 forskellige massageprodukter.
        <br />
        <br />
        Mange af disse produkter sælges stadig hos Medisis. Grethe udvidede
        sortimentet og begyndte at sælge til professionelle behandlere. Da Bente
        overtog firmaet i 2009 begynde hun at udvide ved at lave private label
        for en del kunder.
      </p>
    </div>
    <div class="image-container">
      <img src="@/assets/Historien.png" alt="Medisis Produkter" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Erhverv",
};
</script>

<style scoped>
.forside-container {
  display: flex;
  align-items: center;

  padding: 20px;
  margin: 0 100px;
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
  max-width: 450px;
  max-height: 500px;
  height: auto;
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
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Responsivt grid */
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.value-item {
  text-align: center;
  padding: 20px;
}

.value-item img {
  width: 100px; /* Ikonstørrelse */
  height: auto;
}

.value-item h3 {
  margin-bottom: 15px;
}

.value-item p {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}
</style>
