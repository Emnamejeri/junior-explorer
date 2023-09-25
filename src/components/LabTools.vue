<template>
  <nav>
    <router-link to="/learn/periodictable">Periodic Table</router-link> |
    <router-link to="/learn/labtools">Lab Tools</router-link> |
    <router-link to="/learn/chemistryfacts">Fun Facts</router-link>
  </nav>
  <router-view />
  <div class="card-container">
    <div v-for="index in 8" :key="index" class="card" style="width: 18rem">
      <img class="card-img-top" :src="imageSrc" :alt="altText" />
      <div class="card-body">
        <h5 class="card-title">{{ cardTitle }}</h5>
        <p class="card-text">{{ cardText }}</p>
        <a :href="link" class="btn btn-primary">{{ buttonText }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imageSrc = "path/to-your-image.jpg";
const altText = "Card image";
const cardTitle = "Fun Fact Card";
const cardText = "Did you know? The Earth is round like a ball!";
const link = "#";
const buttonText = "Learn More";
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.card {
  width: 18rem;
  text-align: center;
  background-color: #fde3a7;
  border: 2px solid #ffaa00;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: auto;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.card-text {
  font-size: 16px;
  margin-top: 10px;
}

.btn-primary {
  background-color: #ffaa00;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #ffd700;
}
</style>
