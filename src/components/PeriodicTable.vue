<template>
  <NavigationSection />

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

    <!-- Pop-up -->
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
  height: 100vh;
}

.element-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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
</style>
