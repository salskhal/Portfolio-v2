<template>
  <div class="bg-main px-10 md:px-16 py-8">
    <div class="text-right ml-auto" data-aos="fade-up">
      <h3 class="text-num text-6xl font-bold mb-6">03.</h3>
      <h1 class="font-bold text-white text-5xl mb-10">Featured Projects</h1>
    </div>
    <div class="projects grid md:grid-cols-2 gap-10">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="grid bg-main"
      >
        <div>
          <img :src="'assets/Project/' + project.imgName" alt="" />
        </div>
        <div class="py-10 md:pb-0 md:py-0 flex flex-col">
          <h1 class="f font-bold uppercase text-2xl text-featureTitle">
            {{ project.title }}
          </h1>
          <p class="text-featureDescription text-xl font-medium mt-4">
            {{ project.description }}
          </p>
          <ul class="flex gap-10 px-5 mt-5 text-white">
            <li
              v-for="(used, index) in project.usedTech"
              :key="index"
              class="list-disc"
            >
              {{ used }}
            </li>
          </ul>
          <div class="mt-4">
            <a :href="project.link" target="_blank"> <Link class="w-8"/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Link from "../assets/icons/link.svg";

const projects = reactive([
  {
    title: "Trivia App",
    description:
      "I built this project for learning purposes, it was built without any framework and made use of an external API to fetch the questions",
    imgName: "trivia.png",
    link: "https://trivia-app1.vercel.app/",
    usedTech: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    title: "Todo App",
    description:
      "This is was built when i started learning vue js, i made use of vue composition API for the state management  instead of the usuall pinia or vuex",
    imgName: "todo.png",
    link: "https://vue-todo-app-drab.vercel.app/",
    usedTech: ["VUE", "COMPOSITION API"],
  },
  {
    title: "Git Profile Search",
    description:
      "Was built making use of the github API, it fetches details of github users displaying it on the DOM",
    imgName: "git-profile.png",
    link: "https://gitfetch.vercel.app/",
    usedTech: ["HTML", "CSS", "JAVASCRIPT"],
  },
]);
</script>

<style scoped></style>
