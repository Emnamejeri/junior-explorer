<template>
  <nav>
    <router-link to="/practice/quiz">The Quiz</router-link> |
    <router-link to="/practice/game">The Game</router-link>
  </nav>
  <router-view />
  <div class="container">
    <h2>Welcome to our exciting quizzes!</h2>
    <p>
      They're like fun games where you can test what you've learned and win cool
      rewards while having a blast learning new things!
    </p>
    <button class="start-button">Start The Quiz</button>
  </div>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  text-align: center;
}

h2 {
  color: #0078d4;
}

p {
  font-size: 18px;
  color: #333;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
.start-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0078d4;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.start-button:hover {
  background-color: #0058a3;
}
</style>
