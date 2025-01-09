<template>
  <header class="medisis-header">
    <div class="top-bar">
      <div class="logo-container">
        <router-link to="/">
          <img :src="logo" alt="Medisis Logo" />
        </router-link>
      </div>
      <button class="burger-menu" @click="toggleMenu">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
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
      <nav :class="['nav-links', { active: menuOpen }]">
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
      dropdownVisible: false,
      menuOpen: false,
    };
  },
  methods: {
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Default styling */
.medisis-header {
  background-color: #f2f3ee;
  padding: 10px 0;
}

.top-bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 20px;
}

.logo-container {
  grid-column: 2;
  text-align: center;
}

.logo-container img {
  height: 55px;
  margin-bottom: 20px;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 15px;
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
  color: #6b6b3e;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
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
  justify-content: center;
}

/* Dropdown styling */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f2f3ee;
  border: 1px solid #ddd;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 100px;
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
.burger-menu {
  display: none;
}

/* Burger menu styles for smaller screens */

@media (max-width: 1000px) {
  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: #f2f3ee;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    z-index: 1000;
  }

  .nav-links.active {
    display: flex;
  }

  .burger-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    color: #4a4a2a;
    position: absolute;
    top: 15px;
    right: 25px;
  }

  .burger-menu:hover {
    color: #6b6b3e;
  }

  .top-bar {
    grid-template-columns: 1fr auto;
  }

  .icons {
    margin-left: 0;
  }

  .logo-container {
    grid-column: 1 / span 1;
  }
}
</style>
