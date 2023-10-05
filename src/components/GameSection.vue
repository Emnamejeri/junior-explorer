<template>
  <nav>
    <router-link to="/practice/quiz">The Quiz</router-link> |
    <router-link to="/practice/game">The Game</router-link>
  </nav>
  <router-view />
  <div v-if="!gameStarted" class="container">
    <h2>Get ready to dive into our amazing world of games!</h2>
    <p>
      Our game section is like a treasure chest filled with fun adventures and
      challenges. You can explore exciting quests, solve puzzles, and have a
      fantastic time while leveling up your skills. Play, learn, and conquer all
      while having a blast in our game zone!
    </p>
    <button class="start-button" @click="startGame">Start The Game</button>
  </div>
  <div class="card" style="width: 18rem" v-if="gameStarted && currentCard">
    <img
      class="card-img-top"
      :src="currentCard.imageSrc"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ currentCard.question }}</h5>
      <p class="card-text" v-if="feedbackMessage">{{ feedbackMessage }}</p>
      <a
        :class="{
          'btn-success': feedbackMessage && currentCard.correctAnswer === true,
          'btn-danger': feedbackMessage && currentCard.correctAnswer === false,
          'btn-primary': !feedbackMessage,
        }"
        class="btn"
        @click="handleButtonClick(true)"
        >True</a
      >
      <a
        :class="{
          'btn-success': feedbackMessage && currentCard.correctAnswer === false,
          'btn-danger': feedbackMessage && currentCard.correctAnswer === true,
          'btn-primary': !feedbackMessage,
        }"
        class="btn"
        @click="handleButtonClick(false)"
        >False</a
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface Card {
  question: string;
  correctAnswer: boolean;
  displayedMessage: string;
  imageSrc: string;
}

export default defineComponent({
  setup() {
    const cards: Card[] = [
      {
        question: "Is this a Beaker?",
        correctAnswer: false,
        displayedMessage: "This is a Microscope",
        imageSrc: require("@/assets/lab1.jpg"),
      },
      {
        question: "Is this the molecule of Water?",
        correctAnswer: true,
        displayedMessage: "This is H2O the water molecule",
        imageSrc: require("@/assets/game2.jpg"),
      },
      {
        question: "Is this the chemical symbol of Uranium?",
        correctAnswer: false,
        displayedMessage: "This is the symbol of Potassium (K)",
        imageSrc: require("@/assets/game3.png"),
      },
      {
        question: "Is this a Pipette?",
        correctAnswer: true,
        displayedMessage: "This is a pipette",
        imageSrc: require("@/assets/lab5.jpg"),
      },
      {
        question: "Is this the chemical symbol for Gold?",
        correctAnswer: true,
        displayedMessage: "This is the symbol of Gold (Au)",
        imageSrc: require("@/assets/game5.png"),
      },
      {
        question: "Is this the formula for Carbon Dioxide?",
        correctAnswer: true,
        displayedMessage: "This is CO2, the formula for Carbon Dioxide",
        imageSrc: require("@/assets/game6.png"),
      },
      {
        question: "Is this a picture of a Neutron?",
        correctAnswer: false,
        displayedMessage: "This is a picture of a Proton",
        imageSrc: require("@/assets/game7.jpg"),
      },
      {
        question: "Is this an image of Maxwell Equations?",
        correctAnswer: false,
        displayedMessage: "This is the Pythagorean theorem",
        imageSrc: require("@/assets/game8.png"),
      },
      {
        question: "Is this an image of a Bunsen Burner?",
        correctAnswer: false,
        displayedMessage: "This is an image of a Florence Flask",
        imageSrc: require("@/assets/game9.jpg"),
      },
      {
        question: "Is this the element Iron represented?",
        correctAnswer: true,
        displayedMessage: "This is the symbol for Iron (Fe)",
        imageSrc: require("@/assets/game10.jpg"),
      },
      {
        question: "Is this a diagram of the Human Heart?",
        correctAnswer: false,
        displayedMessage: "This is a diagram of the Human Brain",
        imageSrc: require("@/assets/game11.png"),
      },
      {
        question: "Is this a chemical element in the periodic table?",
        correctAnswer: true,
        displayedMessage: "This is Azote (N)",
        imageSrc: require("@/assets/game12.png"),
      },
      {
        question: "Is this the structural formula for Methane?",
        correctAnswer: true,
        displayedMessage: "This is CH4, the structural formula for Methane",
        imageSrc: require("@/assets/game13.jpeg"),
      },
    ];

    const currentIndex = ref(0);
    const incorrectIndices = ref<number[]>([]);
    const feedbackMessage = ref<string | null>(null);
    const gameStarted = ref(false);

    const startGame = () => {
      gameStarted.value = true;
    };
    const currentCard = computed(() => {
      return cards[currentIndex.value];
    });

    const handleButtonClick = (userAnswer: boolean): void => {
      const isCorrect = userAnswer === currentCard.value.correctAnswer;
      feedbackMessage.value = currentCard.value.displayedMessage;

      if (!isCorrect) {
        incorrectIndices.value.push(currentIndex.value);
      }

      setTimeout(() => {
        feedbackMessage.value = null;
        // Logic to determine next card displayed
        if (incorrectIndices.value.length > 0 && !isCorrect) {
          const shiftedValue = incorrectIndices.value.shift();
          if (typeof shiftedValue === "number") {
            currentIndex.value = shiftedValue;
          }
        } else if (currentIndex.value < cards.length - 1) {
          currentIndex.value++;
        } else {
          currentIndex.value = 0;
          incorrectIndices.value = [];
        }
      }, 5000); // Set the delay between cards to 5 secs
    };

    return {
      currentCard,
      handleButtonClick,
      feedbackMessage,
      gameStarted,
      startGame,
    };
  },
});
</script>

<style scoped>
body {
  font-family: "Comic Sans MS", Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.card {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2em auto;
  padding: 1em;
  width: 50%;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: auto;
}

.card-body {
  padding: 15px;
  text-align: center;
}

.btn {
  margin: 5px;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #009688 !important;
  color: white;
}

.btn-success {
  background-color: #28a745 !important;
  color: white;
}

.btn-danger {
  background-color: #dc3545 !important;
  color: white;
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
  font-family: "Comic Sans MS", cursive;
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

.start-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #009688 !important;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}
</style>
