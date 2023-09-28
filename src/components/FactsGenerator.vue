<template>
  <NavigationSection />
  <nav>
    <router-link to="/learn/periodictable">Periodic Table</router-link> |
    <router-link to="/learn/labtools">Lab Tools</router-link> |
    <router-link to="/learn/chemistryfacts">Fun Facts</router-link>
  </nav>
  <router-view />
  <div class="container">
    <div class="circle-container">
      <button class="circle-button" @click="nextFact">
        {{ currentFact }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const facts = [
      "Water is made up of two elements: hydrogen and oxygen, and its chemical formula is H2O.",
      "The air we breathe is a mixture of gases, with the most abundant ones being nitrogen (78%) and oxygen (21%).",
      "The smallest unit of an element is called an atom, and it's too tiny to see with the naked eye.",
      "Atoms are like building blocks for everything around us, and there are over 100 different kinds of atoms, known as elements.",
      "When atoms combine, they form molecules. For example, two hydrogen atoms and one oxygen atom make a water molecule.",
      "Carbon is an essential element for life on Earth, and it's found in all living things, including you!",
      "Diamonds are made of carbon atoms arranged in a specific crystal structure.",
      "Gold is so malleable that you can flatten it into extremely thin sheets called gold leaf.",
      "Iron is used to make steel, which is used in many buildings and tools because it's strong and durable.",
      "The chemical reaction that causes iron to rust is called oxidation, and it happens when iron reacts with oxygen and water.",
      "Baking soda (sodium bicarbonate) can be used to make things rise in baking, like bread and cakes, because it produces carbon dioxide gas.",
      "The fizzy bubbles in soda are also due to carbon dioxide gas escaping from the liquid.",
      "An acid, like vinegar, can react with a base, like baking soda, to produce carbon dioxide gas, causing a fun fizzing effect.",
      "The colors of fireworks are created by different chemical compounds that burn and produce colorful light.",
      "Chlorophyll, a green pigment in plants, helps them capture sunlight and turn it into energy through photosynthesis.",
      "The smell of freshly cut grass is caused by a chemical compound released by the grass when it's injured.",
      "Your body uses oxygen to burn the food you eat and release energy through a process called respiration.",
      "Your bones are mostly made of a mineral called calcium phosphate, which makes them strong.",
      "The chemical formula for table salt is NaCl, which stands for sodium chloride.",
      "A rainbow is created when sunlight is split into its different colors due to the bending of light.",
      "Some substances, like glue, can change from a liquid to a solid when they dry because of a chemical process.",
      "Ice is just frozen water, and it forms when water molecules slow down and arrange themselves in a regular pattern.",
      "The sweet taste in candy and sugar comes from a substance called sucrose.",
      "Vinegar contains acetic acid, which gives it its sour taste.",
      "The smell of a rose comes from the many different chemicals in its petals.",
      "Perfumes and colognes are made from a combination of different scented chemicals.",
      "The sun is a giant ball of hot gases, mostly hydrogen and helium, and it provides heat and light to Earth.",
      "Stars are like huge nuclear reactors that create elements by fusing hydrogen into helium and more massive elements.",
      "Carbon dioxide is a greenhouse gas that helps keep our planet warm, but too much of it can cause global warming.",
      "The Earth's crust is made up of various elements, with silicon and oxygen being the most abundant.",
      "Oil is formed from the remains of ancient plants and animals, which were buried and subjected to heat and pressure over millions of years.",
      "The process of turning milk into cheese is a result of chemical reactions involving bacteria and enzymes.",
      "The fizz in soda pop comes from carbon dioxide gas dissolved in the liquid.",
      "When you cut an apple and it turns brown, it's because of a chemical reaction called oxidation.",
      "Lemon juice can be used to clean things because it contains citric acid, which can dissolve dirt and grime.",
      "Some substances, like dry ice (frozen carbon dioxide), can change directly from a solid to a gas without becoming a liquid first. This process is called sublimation.",
      "The Earth's atmosphere is held in place by gravity, and it contains gases like nitrogen, oxygen, and traces of other elements.",
      "Helium is a gas that makes balloons float because it's less dense than the air we breathe.",
      "Carbon monoxide is a poisonous gas that is colorless and odorless, which is why it's important to have carbon monoxide detectors in homes.",
      "Hydrogen gas is the lightest element and can be used as a fuel source for rockets.",
      "Carbon is the foundation of organic chemistry, and all living things are considered organic compounds because they contain carbon.",
      "Teflon is a non-stick material used in cookware, and it was discovered by accident in a chemistry lab.",
      "Plastics are made from polymers, which are long chains of repeating molecules.",
      "The ink in a pen is a mixture of colored pigments and a liquid called a solvent.",
      "The smell of a skunk's spray is due to a chemical compound called thiols, which are sulfur-containing molecules.",
    ];

    const currentFactIndex = ref(0);
    const currentFact = ref(facts[currentFactIndex.value]);

    const nextFact = () => {
      currentFactIndex.value = (currentFactIndex.value + 1) % facts.length;
      currentFact.value = facts[currentFactIndex.value];
    };

    return {
      currentFact,
      nextFact,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin-top: 15vh;
}

.circle-container {
  position: relative;
  background-color: #e0f2f1;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  overflow: hidden;
}

.circle-button {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 18px;
  font-family: "Comic Sans MS", cursive;
  background-color: #e0f2f1;
  color: #009688;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background-color 0.3s;
  position: relative;
  z-index: 6;
  overflow: hidden;
}

.circle-button:hover {
  background-color: #009688;
  color: #fff;
}

nav {
  text-align: center;
  background-color: #e0f2f1;
  padding: 20px;
  margin-top: 2em;
  margin-bottom: 4em;
}

nav a {
  text-decoration: none;
  color: #009688;
  font-size: 18px;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #e0f2f1;
  transition: background-color 0.3s ease;
  font-family: "Comic Sans MS", cursive;
}

nav a:hover {
  background-color: #009688;
  color: white;
}
</style>
