<template>
  <div class="flex flex-col min-h-screen" id="home">
    <Nav />
    <div class="mt-10 body">
      <Landing />
      <About id="about" />
      <Skills id="skills" />
      <Featured id="projects" />
      <LetsChat id="connect" />
    </div>
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Landing from "./components/Landing.vue";
import Featured from "./components/Featured.vue";
import LetsChat from "./components/LetsChat.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>

.active {
  background: #2c3748;
}
</style>
