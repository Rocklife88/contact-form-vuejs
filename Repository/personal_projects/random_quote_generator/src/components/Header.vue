<template>
    <header class=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 w-full flex justify-between ">
      <h1 class="text-xl">App Header</h1>
      <nav class="text-lg text-blue-200 flex gap-2 ">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
  </template>
  
  <script setup>
  // Logica specifica del header se necessario
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  /* Stili specifici per il header */
  </style>
  