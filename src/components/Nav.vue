<template>
  <div class="bg-main text-gray-100 py-4 px-6 md:px-16 shadow md:flex justify-between w-full fixed">
    <div class="flex items-center cursor-pointer">
      <Logo />
    </div>
    <span class="absolute md:hidden right-6 top-[-15px] cursor-pointer" @click="toggleNav">
      <Hamburger class="w-8"/>
    </span>
    <ul class="md:flex md:items-center px-10 pb-10 md:px-0 md:pb-0 md:static absolute bg-main  md:w-auto w-full top-14 md:shadow-none  shadow duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-4 md:my-0 my-6" v-for="(link, index) in links" :key="index" @click="closeNav">
        <a :href="link.link" class="text-xl hover:text-[hsla(0,0%,100%,.52)]">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Logo from "../assets/icons/mine.svg";
import Hamburger from "../assets/icons/hamburger.svg";
import { ref } from "@vue/reactivity";

const toggleNav = ()=>{
  open.value = !open.value
}

const closeNav = () =>{
  open.value = false
}

let open = ref(false)

let links = ref([
  {name: "Home", link: "#home"},
  {name: "About", link: "#about"},
  {name: "Skills", link: "#skills"},
  {name: "Featured", link: "#projects"},
  {name: "Connect", link: "#connect"},
])

</script>

<style></style>
