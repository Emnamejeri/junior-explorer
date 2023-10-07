<template>
  <nav>
    <router-link to="/practice/quiz">The Quiz</router-link> |
    <router-link to="/practice/game">The Game</router-link>
  </nav>
  <router-view />
  <div class="container">
    <h1>Hey There, Curious Minds!</h1>
    <p>
      We're super excited to introduce you to our brand new
      <b> Practice Zone </b> the perfect place for you to put your knowledge to
      the test and <b>sharpen</b> those awesome skills you've been acquiring on
      your learning journey.
    </p>
    <p>
      Here, you get to be the star of your own <b>learning adventure</b>.
      Whether you've been exploring math, science, languages, or any other
      exciting subjects, this is where you get to show off what you know and
      discover even more along the way.
    </p>
    <p>
      Start by choosing <b>Quiz</b> or <b>Game</b> to practice your knowledge
    </p>
  </div>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  text-align: center;
  margin: 0;
  padding: 0;
}

h1 {
  color: #0078d4;
  font-size: 2em;
  margin: 0.5em 0;
}

p {
  font-size: 1em;
  color: #333;
  margin: 0.5em 0;
}

.container {
  max-width: 100%;
  margin: 1em auto;
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding-left: 5%;
  padding-right: 5%;
}

nav {
  text-align: center;
  background-color: #e0f2f1;
  padding: 1em;
  margin-top: 2em;
  margin-bottom: 4em;
}

nav a {
  text-decoration: none;
  color: #009688;
  font-size: 1em;
  margin: 0 0.5em;
  padding: 0.5em 1em;
  border-radius: 25px;
  background-color: #e0f2f1;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover {
  background-color: #009688;
  color: white;
}

@media only screen and (max-width: 768px) {
  p {
    font-size: 0.9em;
  }
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 1.5em;
  }

  p {
    font-size: 0.85em;
  }

  nav a {
    font-size: 0.85em;
    padding: 0.5em;
  }

  .container {
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>
