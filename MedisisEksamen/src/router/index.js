import { createRouter, createWebHashHistory } from "vue-router";
import Forside from "../views/Forside.vue";
import Produkter from "../views/Produkter.vue";
import OmMedisis from "../views/OmMedisis.vue";
import Erhverv from "../views/Erhverv.vue";
import ProduktDetaljer from "../views/ProduktDetaljer.vue";
import leveringsbetingelser from "@/views/leveringsbetingelser.vue";

const routes = [
  { path: "/", name: "Forside", component: Forside },
  { path: "/produkter", name: "Produkter", component: Produkter },
  { path: "/om-medisis", name: "Om Medisis", component: OmMedisis },
  { path: "/erhverv", name: "Erhverv", component: Erhverv },
  {
    path: "/produkter/:id",
    name: "ProduktDetaljer",
    component: ProduktDetaljer,
    props: true,
  },
  {
    path: "/produkt/:id",
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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Hvis brugeren trykker "tilbage" eller "frem", behold positionen
    } else {
      return { top: 0 }; // Scroll til toppen på nye sider
    }
  },
});

export default router;
