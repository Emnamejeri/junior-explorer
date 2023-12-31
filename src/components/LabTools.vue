<template>
  <NavigationSection />
  <nav>
    <router-link to="/learn/periodictable">Periodic Table</router-link>
    <router-link to="/learn/labtools">Lab Tools</router-link>
    <router-link to="/learn/chemistryfacts">Fun Facts</router-link>
  </nav>
  <router-view />
  <div class="card-container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      style="width: 13rem"
    >
      <img class="card-img-top" :src="card.imagePath" />
      <div class="card-body">
        <h5 class="card-title">{{ card.cardTitle }}</h5>
        <p class="card-text">{{ card.cardText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    imagePath: require("@/assets/lab1.jpg"),
    cardTitle: "Microscope",
    cardText: "Magnifies tiny objects for detailed examination",
  },
  {
    imagePath: require("@/assets/lab2.jpg"),
    cardTitle: "Beaker",
    cardText: "Measures, mixes, and heats liquids in a cylindrical container",
  },
  {
    imagePath: require("@/assets/lab3.jpg"),
    cardTitle: "Test Tube",
    cardText: "Holds liquids for experiments and reactions",
  },
  {
    imagePath: require("@/assets/lab4.jpg"),
    cardTitle: "Bunsen Burner",
    cardText: "Gas burner for heating and sterilizing",
  },
  {
    imagePath: require("@/assets/lab5.jpg"),
    cardTitle: "Pipette",
    cardText: "Precisely transfers small liquid volumes",
  },
  {
    imagePath: require("@/assets/lab6.jpg"),
    cardTitle: "Safety Goggles",
    cardText: "Protects eyes from lab hazards",
  },
  {
    imagePath: require("@/assets/lab7.jpg"),
    cardTitle: "Magnifying Glass",
    cardText: "Enlarges objects for closer inspection",
  },
  {
    imagePath: require("@/assets/lab8.jpg"),
    cardTitle: "Thermometer",
    cardText: "Measures temperature with liquid expansion",
  },
]);

export default {
  data() {
    return {
      cards,
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  height: auto;
  overflow-y: auto;
}

.card {
  width: 100%;
  max-width: 18rem;
  text-align: center;
  background-color: #e0f2f1;
  border: 2px solid #009688;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.card img {
  width: 100%;
  height: 250px;
  max-height: 29vh;
  object-fit: cover;
  border-radius: 10px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  color: #009688;
}

.card-text {
  font-size: 16px;
  margin-top: 10px;
}

.btn-primary {
  background-color: #009688;
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
  background-color: #007e6d;
}

nav {
  text-align: center;
  background-color: #e0f2f1;
  padding: 20px;
  margin-top: 2em;
  margin-bottom: 1em;
  border-radius: 10px;
}

nav a {
  text-decoration: none;
  color: #3399cc;
  font-weight: bold;
  font-size: 1rem;
  font-family: "Comic Sans MS", cursive;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #e0f2f1;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #009688;
  color: white;
}

@media (max-width: 992px) {
  nav a {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}

@media (max-width: 768px) {
  nav {
    padding: 15px;
  }

  nav a {
    font-size: 0.8rem;
    padding: 8px 14px;
  }
}

@media (max-width: 576px) {
  nav {
    padding: 10px;
  }

  nav a {
    display: block;
    width: 90%;
    margin: 5px auto;
  }
}
</style>
