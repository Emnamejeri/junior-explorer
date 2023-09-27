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
