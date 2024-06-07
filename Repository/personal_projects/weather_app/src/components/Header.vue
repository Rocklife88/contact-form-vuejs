<template>
    <nav class="relative flex flex-wrap items-center justify-between  bg-teal-500 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
        VueWeather
          </a>
          <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>

 const toggleNavbar = () => {
   showMenu = !showMenu

 }
  </script>