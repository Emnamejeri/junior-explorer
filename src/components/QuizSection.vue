<template>
  <nav>
    <router-link to="/practice/quiz">The Quiz</router-link> |
    <router-link to="/practice/game">The Game</router-link>
  </nav>
  <router-view />
  <div class="page-container">
    <div v-if="showIntroText" class="container">
      <h2>Welcome to our exciting Quiz!</h2>
      <p>
        They're like fun games where you can test what you've learned and win
        cool rewards while having a blast learning new things!
      </p>
    </div>

    <div v-if="!showQuiz && !showQuizResults" class="button-container">
      <button class="start-button" @click="startQuiz">Start Quiz</button>
    </div>

    <div v-if="showQuiz && !showQuizResults" class="quiz-section">
      <h3>{{ currentQuestion.question }}</h3>
      <ul>
        <li v-for="(answer, index) in currentQuestion.answers" :key="index">
          <input
            type="radio"
            :id="answer"
            :value="answer"
            v-model="userAnswers[currentQuestionIndex]"
          />
          <label :for="answer">{{ answer }}</label>
        </li>
      </ul>

      <button
        class="submit-button"
        @click="nextQuestionOrSubmit"
        :disabled="!isAnswerSelected"
      >
        {{
          currentQuestionIndex === quizQuestions.length - 1
            ? "Submit Quiz"
            : "Next"
        }}
      </button>
    </div>

    <div v-if="showQuizResults" class="quiz-results">
      <h2>Quiz Results</h2>
      <p>Correct Answers: {{ correctAnswersCount }}</p>
      <p>Wrong Answers: {{ wrongAnswersCount }}</p>
      <p>Score: {{ scorePercentage.toFixed(2) }}%</p>
      <ul>
        <li v-for="(question, index) in quizQuestions" :key="index">
          <p>{{ question.question }}</p>
          <p class="correct-answer">
            Correct Answer: {{ question.correctAnswer }}
          </p>
          <p
            :class="
              userAnswers[index] === question.correctAnswer
                ? 'correct-answer'
                : 'wrong-answer'
            "
          >
            Your Answer: {{ userAnswers[index] }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";

interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
}

export default {
  setup() {
    const showQuiz = ref(false);
    const userAnswers = ref<string[]>([]);
    const currentQuestionIndex = ref(0);
    const showQuizResults = ref(false);
    const showIntroText = ref(true);
    const scorePercentage = ref(0);
    const correctAnswersCount = ref(0);
    const wrongAnswersCount = ref(0);

    const isAnswerSelected = computed<boolean>(() => {
      return userAnswers.value[currentQuestionIndex.value] !== undefined;
    });
    const quizQuestions: QuizQuestion[] = [
      {
        question: "What is the chemical symbol for Oxygen?",
        answers: ["O", "H", "C", "N"],
        correctAnswer: "O",
      },
      {
        question: "How many elements are there in the periodic table?",
        answers: ["92", "118", "109", "87"],
        correctAnswer: "118",
      },
      {
        question:
          "What gas do plants absorb from the atmosphere during photosynthesis?",
        answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon dioxide",
      },
      {
        question: "Which element is a liquid at room temperature?",
        answers: ["Mercury", "Gold", "Aluminum", "Iron"],
        correctAnswer: "Mercury",
      },
      {
        question: "What is the process of turning a liquid into a gas called?",
        answers: ["Evaporation", "Condensation", "Sublimation", "Fusion"],
        correctAnswer: "Evaporation",
      },
      {
        question: "What is the chemical symbol for Gold?",
        answers: ["Go", "Ge", "Au", "Ag"],
        correctAnswer: "Au",
      },
      {
        question:
          "Which tool is used to measure the volume of a liquid in a laboratory?",
        answers: ["Thermometer", "Balance", "Graduated cylinder", "Microscope"],
        correctAnswer: "Graduated cylinder",
      },
      {
        question: "What is the smallest unit of matter?",
        answers: ["Molecule", "Atom", "Cell", "Proton"],
        correctAnswer: "Atom",
      },
      {
        question: "Which gas is commonly used in balloons to make them float?",
        answers: ["Oxygen", "Helium", "Nitrogen", "Carbon dioxide"],
        correctAnswer: "Helium",
      },
      {
        question: "What is the chemical symbol for Water?",
        answers: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: "H2O",
      },
      {
        question:
          "What is the process of separating mixtures based on the different boiling points of substances called?",
        answers: ["Filtration", "Distillation", "Decantation", "Evaporation"],
        correctAnswer: "Distillation",
      },
      {
        question: "Which tool is used to hold test tubes in a laboratory?",
        answers: ["Bunsen burner", "Beaker", "Test tube holder", "Pipette"],
        correctAnswer: "Test tube holder",
      },
    ];

    const currentQuestion = computed(
      () => quizQuestions[currentQuestionIndex.value]
    );

    const startQuiz = () => {
      showIntroText.value = false;
      showQuiz.value = true;
    };

    const nextQuestionOrSubmit = () => {
      if (currentQuestionIndex.value < quizQuestions.length - 1) {
        currentQuestionIndex.value++;
      } else {
        submitQuiz();
      }
    };

    const submitQuiz = () => {
      correctAnswersCount.value = 0;
      wrongAnswersCount.value = 0;

      for (let i = 0; i < quizQuestions.length; i++) {
        if (userAnswers.value[i] === quizQuestions[i].correctAnswer) {
          correctAnswersCount.value++;
        } else {
          wrongAnswersCount.value++;
        }
      }

      scorePercentage.value =
        (correctAnswersCount.value / quizQuestions.length) * 100;

      showIntroText.value = false;
      showQuiz.value = false;
      showQuizResults.value = true;
    };

    return {
      showIntroText,
      showQuiz,
      userAnswers,
      startQuiz,
      nextQuestionOrSubmit,
      currentQuestion,
      currentQuestionIndex,
      quizQuestions,
      isAnswerSelected,
      showQuizResults,
      correctAnswersCount,
      wrongAnswersCount,
      scorePercentage,
    };
  },
};
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

.page-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.start-button,
.submit-button {
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

.start-button:hover,
.submit-button:hover {
  background-color: #007766;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
}

nav a:hover {
  background-color: #009688;
  color: white;
}

.quiz-section {
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

li {
  margin: 10px 0;
}

h2,
h3,
p,
label {
  color: #333;
  font-size: 1.5em;
}

input[type="radio"] {
  cursor: pointer;
  margin-right: 10px;
}

label {
  display: inline-block;
}

.correct-answer {
  color: #009900;
}

.wrong-answer {
  color: #ff0000;
}
.quiz-results {
  margin-bottom: 2em;
}

@media (max-width: 600px) {
  .page-container,
  .quiz-section,
  .quiz-results {
    padding: 0.5em;
    margin: 0.5em;
  }

  .quiz-results {
    margin-bottom: 1em;
  }

  h2,
  h3,
  p,
  label {
    font-size: 1.25em;
  }

  .start-button,
  .submit-button {
    font-size: 1.25em;
  }
}

@media (min-width: 768px) {
  .quiz-results {
    margin-bottom: 2em;
  }
}
</style>
