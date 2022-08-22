<template>
  <div class="bg-white px-0 md:px-4 ">
    <Nav />
    <Landing id="home"/>
    <About id="about"/>
    <Skills id="skills"/>
    <Featured id="projects"/>
  </div>
</template>

<script setup>

import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Landing from "./components/Landing.vue";
import Featured from "./components/Featured.vue";
import Nav from "./components/Nav.vue";



</script>

<style scoped>

.active {
  background: #2c3748;
}

</style>
