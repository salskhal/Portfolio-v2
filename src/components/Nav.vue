<template>
  <div class="bg-subMain text-gray-100 py-4 px-6 md:px-16 shadow-xl md:flex justify-between w-full fixed z-50">
    <div class="flex items-center cursor-pointer">
      <Logo />
    </div>
    <span class="absolute md:hidden right-6  cursor-pointer" @click="toggleNav" :class="[open ? 'top-[15px]': 'top-[-15px]']">
      <Hamburger class="w-8" v-if="!open"/>
      <Close  class="w-8" v-if="open"/>
    </span>
    <ul class="md:flex md:items-center px-10 pb-10 md:px-0 md:pb-0 md:static absolute bg-subMain  md:w-auto w-full top-14 md:shadow-none   shadow-xl duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-4 md:my-0 my-6" v-for="(link, index) in links" :key="index" @click="closeNav">
        <a :href="link.link" class="text-xl hover:text-[hsla(0,0%,100%,.52)]">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Logo from "../assets/icons/mine.svg";
import Hamburger from "../assets/icons/hamburger.svg";
import Close from "../assets/icons/close.svg"
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

<style>
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

body{
  font-family: "Inter", sans-serif;
}
</style>
