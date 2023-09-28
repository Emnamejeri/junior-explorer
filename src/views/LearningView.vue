<template>
  <PeriodicTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PeriodicTable from "../components/PeriodicTable.vue";
export default defineComponent({
  name: "LearningView",
  components: {
    PeriodicTable,
  },
});
</script>
<style scoped>
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
</style>
