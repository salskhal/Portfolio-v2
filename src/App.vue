<template>
  <div class="grid md:grid-cols-2 min-h-screen md:px-4">
    <div class="bg-slate-600 px-10 md:px-16 py-8">
      <h1 class="font-bold text-white text-7xl mb-10">Skills.</h1>
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="border- border-2 border-white rounded-3xl flex items-center p-6 hover:bg-slate-500 cursor-pointer mb-4"
        @click="toDisplay(skill.id)"
      >
        <h3 class="text-title font-bold text-3xl">{{ skill.name }}</h3>
        <Javascript class="w-16 ml-auto" v-show="skill.id === 'js'" />

        <Html class="w-16 ml-auto" v-show="skill.id === 'ht'" />
        <Vue class="w-16 ml-auto" v-show="skill.id === 'vu'" />
        <Css class="w-16 ml-auto" v-show="skill.id === 'cs'" />
        <!-- <Tailwind v-show="skill.id ==='w'" /> -->

        <img
          src="./assets/icons/tailwindcss-original.svg"
          alt=""
          v-show="skill.id === 'w'"
          class="w-16 ml-auto"
        />
      </div>
    </div>

    <div
      class="bg-js px-16 py-8 hidden md:flex flex-col justify-center"
      v-show="displaying === 'js'"
    >
      <h5 class="ml-auto text-description">About Javascript</h5>
      <div>
        <h2
          class="fon font-bold text-5xl leading-3rem lg:text-6xl lg:leading-5rem text-name"
        >
          The Swiss Army knife of software development.
        </h2>
        <p class="t text-xl mt-7 leading-8 text-description">
          This incredibly important little buddy allows me to do everything from
          crafting experiences and defining behavior for the web to writing and
          running interactive servers.
        </p>
      </div>
    </div>
    <div
      class="bg-tail px-16 py-8 hidden md:flex flex-col justify-center"
      v-show="displaying === 'w'"
    >
      <h5 class="ml-auto text-description">About Tailwind</h5>
      <div>
        <h2
          class="fon font-bold text-5xl leading-3rem lg:text-6xl lg:leading-5rem text-name"
        >
          Build Modern Site Without Leaving Your HTML
        </h2>
        <p class="t text-xl mt-7 leading-8 text-description">
          A utility-first CSS framework for rapidly building custom user
          interfaces. It is a highly customizable, low-level CSS framework that
          gives you all of the building blocks you need to build bespoke designs
          without any annoying opinionated styles you have to fight to override.
        </p>
      </div>
    </div>
    <div
      class="bg-vue px-16 py-8 hidden md:flex flex-col justify-center"
      v-show="displaying === 'vu'"
    >
      <h5 class="ml-auto text-description">About Vue</h5>
      <div>
        <h2
          class="fon font-bold text-5xl leading-3rem lg:text-6xl lg:leading-5rem text-name"
        >
          The Progressive JavaScript Framework
        </h2>
        <p class="t text-xl mt-7 leading-8 text-description">
          A modern front-end framework that can help anybody build a website or
          web app. It's lightweight, flexible, and easy to get started with. But
          it's also a full, rich framework that can grow to meet the needs of
          the most advanced web app builder.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Javascript from "./assets/icons/javascript-original.svg";
import Tailwind from "./assets/icons/tailwindcss-original.svg";
import NewTail from "./assets/icons/tailwindcss-icon.svg";
import Html from "./assets/icons/html-original.svg";
import Vue from "./assets/icons/vue-original.svg";
import Css from "./assets/icons/css-original.svg";

const active = ref(true);
const displaying = ref("js");

const toDisplay = (id) => {
  displaying.value = id;
};

const skills = ref([
  {
    id: "js",
    name: "Javascript",
    active: true,
  },
  {
    id: "w",
    name: "TailwindCSS",
  },
  {
    id: "vu",
    name: "Vue JS",
  },
  {
    id: "ht",
    name: "HTML",
  },
  {
    id: "cs",
    name: "CSS",
  },
]);
</script>

<style scoped>
.active {
  background: #2c3748;
}
</style>
