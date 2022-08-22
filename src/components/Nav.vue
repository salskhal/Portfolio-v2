<template>
  <nav class="bg-subMain flex items-center py-5 px-8">
    <div>
        <Logo />
    </div>
    <div class="ml-auto">
        <ul class="flex gap-6 font-semibold text-2xl text-landingTitle ">
            <li class="hover:text-white"><a href="#home">Home</a></li>
            <li class="hover:text-white"><a href="#about">About</a></li>
            <li class="hover:text-white"><a href="#skills">Skills</a></li>
            <li class="hover:text-white"><a href="#projects">Projects</a></li>
            <li class="hover:text-white"><a href="#contact">Contact</a></li>
        </ul>
    </div>
  </nav>
</template>

<script setup>
    import Logo from "../assets/icons/mine.svg"
</script>

<style>

</style>