import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router"; // Importér routeren

const app = createApp(App);

app.use(router); // Tilføj routeren til din app
app.mount("#app"); // Monter appen
