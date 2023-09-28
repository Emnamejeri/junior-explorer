<template>
  <header>
    <nav class="navbar">
      <div class="nav-left">Junior Explorer</div>
      <div class="nav-right">
        <router-link to="/">Home</router-link>
        <router-link to="/learn">Learn</router-link>
        <router-link to="/practice">Practice</router-link>
        <router-link to="/account">Profile</router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "NavigationSection",
};
</script>

<style scoped>
.navbar {
  background-color: #ffe6f0;
  color: #ff69b4;
  font-weight: bold;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
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
  font-size: 18px;
  transition: color 0.3s ease;
  font-family: "Comic Sans MS", cursive;
  margin-right: 20px;
}

.nav-right a:hover {
  color: #ff007f;
}
</style>
