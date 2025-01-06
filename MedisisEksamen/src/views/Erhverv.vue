<template>
  <div class="forside-container">
    <div class="text-container">
      <h1>Kvalitetsprodukter til din virksomhed</h1>
      <p>
        Klar til at levere produkter, der gør en forskel for din virksomhed.
      </p>
    </div>
    <div class="image-container">
      <img src="@/assets/medisis-image.jpg" alt="Medisis Produkter" />
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
</style>
