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
/* Updated styles for the Navbar */
.navbar {
  background-color: #ffe6f0; /* Light pink background */
  color: #ff69b4; /* Hot pink text color */
  font-weight: bold;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.nav-left {
  font-weight: bold;
  font-size: 1.5rem; /* Larger font size */
  font-family: "Comic Sans MS", cursive; /* Playful font */
  color: #3399cc; /* Hot pink text color */
}

.nav-right a {
  color: #3399cc; /* Deep pink link color */
  text-decoration: none;
  font-size: 18px; /* Larger font size */
  transition: color 0.3s ease;
  font-family: "Comic Sans MS", cursive; /* Playful font */
  margin-right: 20px; /* Add spacing between router links */
}

.nav-right a:hover {
  color: #ff007f; /* Darker pink on hover */
}
</style>
