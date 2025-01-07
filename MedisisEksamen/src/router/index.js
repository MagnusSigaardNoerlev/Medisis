import { createRouter, createWebHistory } from "vue-router";
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
    props: true, // Dette sikrer, at "id" sendes som en prop
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
  history: createWebHistory(),
  routes,
});

export default router;
