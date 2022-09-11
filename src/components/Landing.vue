<template>
  <div
    class=" bg-subMain px-10 md:px-16 lg:px-48   py-16 min-h-screen flex flex-col "
  >
    <h4 class="te text-2xl font-semibold leading-6 text-landingTitle mb-8">
      Hallo Leute,
    </h4>
    <h2 class="text-5xl md:text-7xl font-bold text-white mb-10">
      I'm <span>Khalid Salman-Yusuf</span>
    </h2>
    <h4
      class="flex gap-2 text-3xl md:text-5xl font-bold mb-8 text-[hsla(0,0%,100%,.52)]"
    >
      I am <Typing />
    </h4>
    <p class="text-3xl md:text-4xl leading-10 text-title lg:w-3/4 mb-4">
      I'm a software engineer who likes to create functional products. I strive
      to always provide top-notch products while making sure that technologies
      aid in the accomplishment of corporate objectives.
    </p>
    <div class="mt-10">
      <a
        href="https://sals-digit.netlify.app/"
        target="_blank"
        class="py-3 px-5 border-white text-white border-2 rounded-full text-lg  hover:bg-white hover:text-main"
        >Digital Resume</a
      >
    </div>
  </div>
</template>

<script setup>
import Typing from "./Typing.vue";
</script>

<style></style>
d
