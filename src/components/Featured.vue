<template>
  <div class="bg-main px-10 md:px-16 py-8">
    <div class="text-right ml-auto">
        <h3 class="text-num text-6xl font-bold mb-6">03.</h3>
        <h1 class="font-bold text-white text-5xl mb-10">Featured Projects</h1>
    </div>
    <div class="projects">

    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const projects = reactive([
    {
        title: "",
        description: "",
        imgName: "",
        link: ""
    },
    {
        title: "",
        description: "",
        imgName: "",
        link: ""
    },
    {
        title: "",
        description: "",
        imgName: "",
        link: ""
    },
    {
        title: "",
        description: "",
        imgName: "",
        link: ""
    },
])
</script>

<style scoped></style>
