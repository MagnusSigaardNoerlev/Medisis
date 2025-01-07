<template>
  <header class="medisis-header">
    <div class="top-bar">
      <div class="logo-container">
        <img :src="logo" alt="Medisis Logo" />
      </div>
      <div class="icons">
        <button class="icon-btn">
          <i class="fas fa-search"></i>
        </button>
        <button class="icon-btn">
          <i class="fas fa-user"></i>
        </button>
        <button class="icon-btn">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <div class="nav-container">
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Forside</router-link>
        <div
          class="dropdown"
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
        >
          <router-link to="/produkter" class="nav-link">Produkter</router-link>
          <ul v-show="dropdownVisible" class="dropdown-menu">
            <li>
              <router-link to="/produkter/21" class="dropdown-item"
                >Pleje</router-link
              >
            </li>
            <li>
              <router-link to="/produkter/20" class="dropdown-item"
                >Massage</router-link
              >
            </li>
            <li>
              <router-link to="/produkter/22" class="dropdown-item"
                >Emballage</router-link
              >
            </li>
            <li>
              <router-link to="/produkter/23" class="dropdown-item"
                >Andre Produkter</router-link
              >
            </li>
          </ul>
        </div>
        <router-link to="/om-medisis" class="nav-link">Om Medisis</router-link>
        <router-link to="/erhverv" class="nav-link">Erhverv</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import logoGreen from "@/assets/logo-green.png";

export default {
  name: "Header",
  data() {
    return {
      logo: logoGreen,
      dropdownVisible: false, // Styrer dropdownens synlighed
    };
  },
  methods: {
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
  },
};
</script>

<style scoped>
.medisis-header {
  background-color: #f2f3ee; /* Lys beige farve */
  padding: 10px 0;
}

.top-bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* Tre kolonner */
  align-items: center; /* Juster elementerne lodret */
  padding: 0 20px;
}

.logo-container {
  grid-column: 2; /* Placer logoet i midten */
  text-align: center;
}

.logo-container img {
  height: 55px; /* Tilpas logoets højde */
  margin-bottom: 20px;
}

.icons {
  display: flex;
  justify-content: center; /* Juster ikoner til højre */
  gap: 15px; /* Skab afstand mellem ikoner */
  margin-left: 220px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #4a4a2a;
}

.icon-btn:hover {
  color: #6b6b3e; /* Lysere grøn ved hover */
}

.nav-links {
  display: flex;
  justify-content: center; /* Centrer links */
  gap: 70px; /* Skab afstand mellem links */
  margin-top: 10px; /* Afstand til top-bar */
  border-top: 1px solid #ddd; /* Linje over links */
  border-bottom: 1px solid #ddd; /* Linje under links */
  padding: 15px 0;
  width: 83%;
}

.nav-links a {
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: lighter;
}

.nav-links a:hover {
  text-decoration: underline;
}
.nav-container {
  display: flex;
  justify-content: center; /* Centrer containeren */
}
/* Dropdown-styling */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%; /* Placerer menuen under "Produkter" */
  left: 0;
  background-color: #f2f3ee;
  border: 1px solid #ddd;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Sørger for menuen vises over andre elementer */
  min-width: 100px; /* Gør menuen tilpas bred */
}

.dropdown-item {
  padding: 8px 15px;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #f2f3ee;
}
</style>
