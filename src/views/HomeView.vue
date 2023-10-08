<template>
  <div class="about">
    <p class="description">
      The educational platform that sparks kids' interest in chemistry and
      labs.<br />
      Our app offers interactive lessons, hands-on experiments, and captivating
      animations to make learning chemistry fun and educational.
    </p>
  </div>
  <div class="image-container">
    <div class="card-columns">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        style="width: 14rem; height: 300px"
      >
        <img
          :src="card.imagePath"
          :alt="'child tablet ' + index"
          class="card-img-top responsive-image"
        />
        <div class="card-body">
          <p class="card-text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2em;
  margin-bottom: 2em;
}

.description {
  font-size: 20px;
  color: #333;
  line-height: 1.5;
}
.card-columns {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100%;
  margin: 2em;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card:hover {
  transform: scale(1.05);
}
.card-text {
  padding: 10px;
  text-align: center;
  font-family: "Comic Sans MS", cursive;
  font-weight: bold;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const cards = ref([
      {
        imagePath: require("@/assets/image1.jpg"),
        text: "Explore",
      },
      {
        imagePath: require("@/assets/image2.jpg"),
        text: "Discover",
      },
      {
        imagePath: require("@/assets/image3.jpg"),
        text: "Investigate",
      },
      {
        imagePath: require("@/assets/image4.jpg"),
        text: "Wonder",
      },
      {
        imagePath: require("@/assets/image5.jpg"),
        text: "Experiment",
      },
      {
        imagePath: require("@/assets/image6.jpg"),
        text: "Observe",
      },
      {
        imagePath: require("@/assets/image7.jpg"),
        text: "Analyze",
      },
    ]);

    return {
      cards,
    };
  },
});
</script>
