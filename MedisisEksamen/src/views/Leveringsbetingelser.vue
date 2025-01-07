<template>
  <section class="faq-sektion">
    <h2>Salgs- og leveringsbetingelser</h2>
    <div class="accordion">
      <div
        v-for="(item, index) in accordionItems"
        :key="index"
        class="accordion-item"
      >
        <button class="accordion-header" @click="toggleAccordion(index)">
          {{ item.title }}
          <span :class="{ active: activeIndex === index }">▼</span>
        </button>
        <div class="accordion-content" v-show="activeIndex === index">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Leveringsbetingelser",
  data() {
    return {
      activeIndex: null, // Holder styr på hvilken accordion der er åben
      accordionItems: [
        {
          title: "Ordreoptagelse",
          content:
            "Hos Medisis tilbyder vi et bredt udvalg af naturlige kropsplejeprodukter, der er skabt med omtanke for både dig og miljøet. Uanset om du søger massageolier, body lotions, eller produkter til afslappende fodbad, finder du her kvalitetsprodukter, der plejer din hud.",
        },
        {
          title: "Priser",
          content:
            "Prisen er den på ordrebekræftelsesdagen gældende, og angives normalt inkl. moms og forsendelse. Såfremt der i tiden mellem ordrebekræftelse og levering sker udefra kommende ændringer udenfor MEDISIS kontrol, kan MEDISIS forhøje prisen i henhold til ovenstående,  dette skal dog meddeles inden varens afsendelse.",
        },
        {
          title: "Bestlling",
          content:
            "Bestilling af varen kan ske hos www.medisis.dk. Alle priser er i danske kroner (DKK) og inklusiv moms, hvis ikke andet fremgår. Vi tager forbehold for udgåede varer, trykfejl, restordrer og leverandørsvigt.",
        },
        {
          title: "Levering",
          content:
            "MEDISIS drager normalt omsorg for forsendelsesmåden, og ved franko levering er det på MEDISIS risiko. MEDISIS er ikke ansvarlig overfor køber, når force majeure omstændigheder indtræder ,og andre ting som MEDISIS ikke er herre over. Kunden kan derfor ikke stille krav om erstatning i ovenstående tilfælde.",
        },
        {
          title: "Fragt- og Ekspeditionsomkostninger",
          content:
            "Der vil blive pålagt fragt- og ekspeditionsomkostninger på varer, som sendes. Disse omkostninger er specificerede i indkøbsvognfunktionen. Prisen på fragt bliver fastsat efter vægt og hvor i landet leveringen sker.",
        },
        {
          title: "Betaling",
          content:
            "Alle angivne priser er inkl. 25% moms. Alle priser vises i danske kroner (DKK). Du kan betale dine varer med dankort. Pengene bliver først hævet, når alle alle bestilte varer er afsendt. Når du betaler med overnævnte kort, kan data, du sender i forbindelse med købet fra dit betalingskort, kun læses af pbs, da data sendes krypteret via SSL. i indkøbskurven, samt inden endelig ordreafgivelse vises samlet pris (DKK) inkl. moms og fragt. kontroller om prisen stemmer, inden du godkender betalingen  Efter bestilling får du tilsendt en e-mail, som bekræfter bestillingen af varer, samt til hvilken pris varerne er bestilt, og hvad leveringsomkostningerne er.",
        },
        {
          title: "Produktændringer",
          content:
            "MEDISIS er berettiget til at gennemføre produktændringer, der kan ske uden ulempe for køber.",
        },
        {
          title: "Produktegnethed",
          content:
            "Medisis har intet ansvar for, at leverede produkter egner sig eller lovligt må anvendes til det af kundens påtænkte formål.",
        },
        {
          title: "Hemmeligholdes",
          content:
            "Kunden må ikke videregive oplysninger om indhold og sammensætning af MEDISIS produkter.",
        },
        {
          title: "Returnring",
          content:
            "MEDISIS følger forbrugeraftalelovens bestemmelser for returnering af købte varer, hvilket betyder, at du har 14 dages returret fra den dag varen modtages. Returnering kan kun ske, såfremt varen fremstår i samme stand og mængde som ved modtagelsen og såfremt du returnerer varen senest 14 dage efter levering. Returnerer du varen sker dette for egen regning og risiko. Når varen er kommet retur, kontrollerer MEDISIS om betingelserne for udnyttelse af forbrugerretten er opfyldt, og i bekræftende fald refunderer MEDISIS den betalte købesum til din konto indenfor få dage. Husk at oplyse din banks registrerings- og kontonummer.",
        },
        {
          title: "Reklamation",
          content:
            "Kunden er forpligtet til at undersøge leverede varer straks efter modtagelsen. Reklamationen skal fremsættes senest 8 dage efter varens modtagelse.",
        },
        {
          title: "Ansvar",
          content:
            "Erstatningsansvar for skader, herunder produktansvar ved kundens dokumenterede tab er MEDISIS ansvarlig i overensstemmelse med dansk rets almindelige regler",
        },
        {
          title: "Værneting og lovvalg",
          content:
            "Alle tvister om ordre eller kontrakter skal, medmindre andet er bestemt, anlægges ved MEDISIS værneting og afgøres efter dansk ret. Dette lovvalg omfatter dog ikke dansk rets internationale privatretlige regler. MEDISIS kan altid vælge at sagsøge køber ved dennes værneting, eller lade sagen behandle ved voldgift i overensstemmelse med loven.",
        },
        // Tilføj flere elementer her
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      // Skifter til den valgte accordion, eller lukker den hvis den er åben
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.delivery-terms {
  text-align: center;
  padding: 20px;
}
.faq-sektion {
  padding: 40px;
}

.faq-sektion h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.accordion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2, 1fr));
  gap: 50px;
  margin-top: 60px;
}

.accordion-item {
  border-bottom: 1px solid #ddd;
}

.accordion-header {
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.2rem;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.accordion-header span {
  font-size: 1rem;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.accordion-header span.active {
  transform: rotate(180deg); /* Vend pilen, når aktiv */
}

.accordion-content {
  padding: 10px 0;
  font-size: 1rem;
  color: #333;
}
</style>
