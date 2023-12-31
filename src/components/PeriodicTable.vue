<template>
  <NavigationSection />
  <nav>
    <router-link to="/learn/periodictable">Periodic Table</router-link>
    <router-link to="/learn/labtools">Lab Tools</router-link>
    <router-link to="/learn/chemistryfacts">Fun Facts</router-link>
  </nav>
  <router-view />

  <div class="container">
    <h1>Important Elements for Kids</h1>
    <div class="element-container">
      <div
        v-for="element in elements"
        :key="element"
        class="element-box"
        @click="showPopup(element)"
      >
        {{ element }}
      </div>
    </div>

    <div v-if="popupVisible" class="popup">
      <div class="popup-content">
        <p>{{ popupMessage }}</p>
        <button @click="closePopup">Clear</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

const elements: Ref<string[]> = ref([
  "H",
  "C",
  "O",
  "N",
  "Fe",
  "Si",
  "Al",
  "Cu",
  "Au",
  "U",
  "Pt",
  "Na",
  "K",
  "Ca",
  "Cl",
]);
const popupVisible: Ref<boolean> = ref(false);
const popupMessage: Ref<string> = ref("");

const showPopup = (element: string): void => {
  const elementMessages: Record<string, string> = {
    H: "Hydrogen is essential for the formation of water, and it is also a vital component of many organic compounds.",
    C: "Carbon is the backbone of organic chemistry and is the basis for all known life on Earth.",
    O: "Oxygen is essential for respiration in most living organisms and is crucial for combustion reactions. It is also a component of water H2O",
    N: "Nitrogen is a key component of amino acids, which are the building blocks of proteins. It is also essential for plant growth and is a major component of the Earth atmosphere.",
    Fe: "Iron is a vital element in hemoglobin, which transports oxygen in the blood. It is also essential in the production of steel, making it critical for construction and manufacturing.",
    Si: "Silicon is a fundamental element in the production of semiconductors and is crucial for the electronics industry.",
    Al: "Aluminum is widely used in construction, transportation, and packaging due to its low density and resistance",
    Cu: "Copper is an excellent conductor of electricity and is used in electrical wiring, electronics, and plumbing.",
    Au: "Gold is highly valued for its rarity and is used in jewelry, currency, and electronic components.",
    U: "Uranium is important as a fuel source in nuclear reactors and plays a significant role in nuclear energy production.",
    Pt: "Platinum is used in catalytic converters, jewelry, and various industrial applications due to its chemical stability and catalytic properties",
    Na: "Sodium is crucial for maintaining electrolyte balance in the body and is used in various industrial processes.",
    K: "Potassium is essential for nerve function and muscle contraction and is important in agriculture as a nutrient for plants.",
    Ca: "Calcium is essential for bone health and is involved in muscle contraction, blood clotting, and cellular signaling.",
    Cl: "Chlorine is used in water purification, sanitation, and the production of a wide range of chemicals.",
  };

  popupMessage.value = elementMessages[element];
  popupVisible.value = true;
};

const closePopup = (): void => {
  popupVisible.value = false;
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.element-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
h1 {
  font-family: "Arial", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #009688;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2em;
  padding-top: 10px;
  position: relative;
}

h1::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  background-color: #009688;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.element-box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0f2f1;
  border: 1px solid #009688;
  font-weight: bold;
  font-size: 20px;
  line-height: 100px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.element-box:hover {
  background-color: #009688;
  color: white;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.popup button {
  margin-top: 10px;
  background-color: #009688;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.popup button:hover {
  background-color: #007e6d;
}

nav {
  text-align: center;
  background-color: #e0f2f1;
  padding: 20px;
  margin-top: 2em;
  margin-bottom: 4em;
  border-radius: 10px;
}

nav a {
  text-decoration: none;
  color: #3399cc;
  font-weight: bold;
  font-size: 1rem;
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
  h1 {
    font-size: 2rem;
    margin-bottom: 2em;
  }

  h1::after {
    width: 60px;
  }
  .element-box {
    width: 90px;
    height: 90px;
    font-size: 18px;
  }

  nav a {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}

@media (max-width: 768px) {
  .element-box {
    width: 80px;
    height: 80px;
    font-size: 16px;
  }
  h1 {
    font-size: 1rem;
    margin-bottom: 2em;
    padding-top: 8px;
  }

  h1::after {
    width: 50px;
  }

  nav {
    padding: 15px;
  }

  nav a {
    font-size: 0.8rem;
    padding: 8px 14px;
  }
}

@media (max-width: 576px) {
  .element-box {
    width: 70px;
    height: 70px;
    font-size: 14px;
  }
  h1 {
    font-size: 1rem;
    margin-bottom: 2em;
    padding-top: 6px;
  }

  h1::after {
    width: 40px;
  }
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
