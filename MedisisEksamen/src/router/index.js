// Importerer router-funktioner fra vue-router
import { createRouter, createWebHashHistory } from "vue-router";
// Importerer de vue-views, der skal bruges til siderne
import Forside from "../views/Forside.vue";
import Produkter from "../views/Produkter.vue";
import OmMedisis from "../views/OmMedisis.vue";
import Erhverv from "../views/Erhverv.vue";
import ProduktDetaljer from "../views/ProduktDetaljer.vue";
import leveringsbetingelser from "@/views/leveringsbetingelser.vue";
// Definerer ruterne for applikationen
const routes = [
  { path: "/", name: "Forside", component: Forside },
  { path: "/produkter", name: "Produkter", component: Produkter },
  { path: "/om-medisis", name: "Om Medisis", component: OmMedisis },
  { path: "/erhverv", name: "Erhverv", component: Erhverv },
  {
    path: "/produkter/:id", // her laver vi dynamisk rute med produkt-id
    name: "ProduktDetaljer",
    component: ProduktDetaljer,
    props: true, // Gør id til en prop
  },
  {
    path: "/produkt/:id", // Dynamisk rute med produkt-id
    name: "ProduktSide",
    component: () => import("../views/ProduktSide.vue"),
    props: true,
  },
  {
    path: "/leveringsbetingelser",
    name: "Leveringsbetingelser",
    component: leveringsbetingelser,
  },
];
// Opretter routeren med hash-historie og ruterne
const router = createRouter({
  history: createWebHashHistory(), // Bruger hash-historie
  routes, // Brug de definerede ruter
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Hvis brugeren trykker "tilbage" eller "frem", behold positionen
    } else {
      return { top: 0 }; // Scroll til toppen på nye sider
    }
  },
});
// Eksporterer routeren
export default router;
