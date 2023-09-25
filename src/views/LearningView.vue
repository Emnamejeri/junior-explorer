<template>
  <nav>
    <router-link to="/learn/periodictable">Periodic Table</router-link> |
    <router-link to="/learn/labtools">Lab Tools</router-link> |
    <router-link to="/learn/chemistryfacts">Fun Facts</router-link>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LearningView",
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
