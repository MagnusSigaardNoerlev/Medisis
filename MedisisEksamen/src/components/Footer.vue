<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Kontakt</h3>
        <p>Om Medisis</p>
        <p>Produkter</p>
        <p>Tlf: 86 46 72 15</p>
        <p>CVR: 32 06 65 69</p>
      </div>
      <div class="vertikal-linje"></div>
      <div class="footer-section">
        <h3>Returpolitik</h3>
        <p>Leveringstiden</p>
        <p>Betalingsmetoder</p>
        <p>Salgs- og leveringsbetingelser</p>
        <p>FAQ</p>
      </div>
      <div class="vertikal-linje2"></div>
      <div class="footer-section">
        <h3>Følg os</h3>
        <div class="social-links">
          <a
            href="https://www.facebook.com/medisisdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/facebook.png" alt="Facebook" />
          </a>
          <a href="mailto:kontakt@medisis.dk">
            <img src="@/assets/envelope-solid.svg" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #f2f3ee;
  padding: 40px 0;
  color: #333;
  position: relative; /* Gør det muligt at bruge positionering for vertikale linjer */
  border-top: 1px solid #ddd;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-links a {
  display: inline-block;
}

.social-links img {
  width: 30px;
  height: 30px;
}

.vertikal-linje,
.vertikal-linje2 {
  width: 1px;
  background-color: #ddd;
  position: absolute;
  top: 50%; /* Centrer linjerne vertikalt */
  transform: translateY(-50%); /* Sørg for, at linjen er centreret */
  height: 347px; /* Juster højden på linjerne, så de ikke går for højt op */
}

.vertikal-linje {
  left: 33%; /* Placér første linje mellem Kontakt og Returpolitik */
}

.vertikal-linje2 {
  left: 66%; /* Placér anden linje mellem Returpolitik og Følg os */
}
</style>
