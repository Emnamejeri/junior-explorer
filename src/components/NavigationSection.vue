<template>
  <header>
    <nav class="navbar">
      <div class="nav-left">Junior Explorer</div>
      <div class="nav-right">
        <router-link to="/">Home</router-link>
        <router-link to="/learn">Learn</router-link>
        <router-link to="/practice">Practice</router-link>
        <router-link to="/profile">Profile</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #e0f2f1;
  font-weight: bold;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  flex-wrap: wrap;
}

.nav-left {
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Comic Sans MS", cursive;
  color: #3399cc;
}

.nav-right a {
  color: #3399cc;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  transition: color 0.3s ease;
  font-family: "Comic Sans MS", cursive;
  margin-right: 20px;
}

.nav-right a:hover {
  color: #ff007f;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .nav-left,
  .nav-right {
    width: 100%;
    text-align: center;
  }

  .nav-right a {
    display: block;
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  .nav-left {
    font-size: 1.2rem;
  }

  .nav-right a {
    font-size: 1em;
  }
}
</style>

<script lang="ts">
export default {
  name: "NavigationSection",
};
</script>
