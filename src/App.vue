<template>
  <NavigationSection />
  <router-view />
  <FooterSection />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FooterSection from "./components/FooterSection.vue";
import NavigationSection from "./components/NavigationSection.vue";

export default defineComponent({
  name: "App",
  components: {
    FooterSection,
    NavigationSection,
  },
});
</script>
