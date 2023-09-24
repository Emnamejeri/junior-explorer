<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/learn">Learn</router-link> |
    <router-link to="/practice">Practice</router-link> |
    <router-link to="/account">Profile</router-link>
  </nav>
  <router-view />
  <FooterSection />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FooterSection from "./components/FooterSection.vue"; // Adjust the path as needed

export default defineComponent({
  name: "App",
  components: {
    FooterSection,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
