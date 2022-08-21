<template>
  <div class="bg-white px-0 md:px-4">
    <Landing/>
    <About />
    <Skills />
  </div>
</template>

<script setup>

import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Landing from "./components/Landing.vue";



</script>

<style scoped>
.active {
  background: #2c3748;
}
</style>
