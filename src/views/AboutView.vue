<template>
  <div class="about">
    <h1 class="header">Junior Explorer</h1>
    <p class="description">
      The educational platform that sparks kids' interest in chemistry and labs.
      Our app offers interactive lessons, hands-on experiments, and captivating
      animations to make learning chemistry fun and educational.
    </p>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  font-size: 36px;
  color: #3498db; /* Blue color for the header */
  margin-bottom: 20px;
}

.description {
  font-size: 20px;
  color: #333; /* Dark gray color for the description */
  line-height: 1.5;
}

/* Add some child-friendly styles */
.about img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
}

.about p {
  margin-top: 20px;
}

.about a {
  color: #e74c3c; /* Red color for links */
  text-decoration: underline;
  transition: color 0.3s;
}

.about a:hover {
  color: #c0392b; /* Darker red color on hover */
}
</style>
