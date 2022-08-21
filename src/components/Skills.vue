<template>
  <div class="grid md:grid-cols-2 min-h-screen ">
    <div class="bg-subMain px-10 md:px-16 py-8">
      <h3 class="text-num text-6xl font-bold mb-6">02.</h3>
      <h1 class="font-bold text-white text-5xl  mb-10">Technologies.</h1>
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
        <Figma class="w-16 ml-auto" v-show="skill.id === 'fg'" />
        <img
          :src="'/assets/icons/' + skill.img"
          alt=""
          v-show="skill.id === 'w'"
          class="w-16 ml-auto"
        />
      </div>
    </div>

    <div
      class="bg-js px-8 py-12 md:px-16 flex flex-col justify-center"
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
      class="bg-vue  px-8 py-12 md:px-16 flex flex-col justify-center"
      v-if="displaying === 'vu'"
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
     <div
      class="bg-html  px-8 py-12 md:px-16 flex flex-col justify-center"
      v-if="displaying === 'ht'"
    >
      <h5 class="ml-auto text-description">About HTML</h5>
      <div>
        <h2
          class="fon font-bold text-5xl leading-3rem lg:text-6xl lg:leading-5rem text-name"
        >
          The Skeleton Of the Web
        </h2>
        <p class="t text-xl mt-7 leading-8 text-description">
          A formatting system for displaying material retrieved over the
          Internet. Each retrieval unit is known as a Web page (from World Wide
          Web), and such pages frequently contain hypertext links that allow
          related pages to be retrieved.
        </p>
      </div>
    </div>
    <div
      class="bg-css px-8 py-12 md:px-16 flex flex-col justify-center"
      v-if="displaying === 'cs'"
    >
      <h5 class="ml-auto text-description">About CSS3</h5>
      <div>
        <h2
          class="fon font-bold text-5xl leading-3rem lg:text-6xl lg:leading-5rem text-name"
        >
          Your Language to Make the Web Nice
        </h2>
        <p class="t text-xl mt-7 leading-8 text-description">
          A style sheet language used for describing the presentation of a
          document written in a markup language such as HTML or XML
        </p>
      </div>
    </div>
    <div
      class="bg-figma px-8 py-12 md:px-16 flex flex-col justify-center"
      v-if="displaying === 'fg'"
    >
      <h5 class="ml-auto text-description">About Figma</h5>
      <div>
        <h2
          class="fon font-bold text-5xl leading-3rem lg:text-6xl lg:leading-5rem text-name"
        >
          The Collaborative Interface Design Tool
        </h2>
        <p class="t text-xl mt-7 leading-8 text-description">
          A browser-based UI and UX design application, with excellent design, prototyping, and code-generation tools. It's currently (arguably) the industry's leading interface design tool, with robust features which support teams working on every phase of the design process.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Javascript from "../assets/icons/javascript-original.svg";
import Html from "../assets/icons/html-original.svg";
import Vue from "../assets/icons/vue-original.svg";
import Css from "../assets/icons/css-original.svg";
import Figma from "../assets/icons/figma_logo.svg";

const active = ref(true);
const displaying = ref("js");

const toDisplay = (id) => {
  displaying.value = id;
};

const skills = ref([
  {
    id: "js",
    name: "Javascript",
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
  {
    id: "fg",
    name: "Figma",
  },
]);
</script>

<style scoped></style>
