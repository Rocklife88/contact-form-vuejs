<template>
    <div class="flex flex-col min-h-screen bg-green-100">
      <header class="bg-green-100 text-white p-4">
        <div class="container mx-auto">
          <h1 class="text-3xl font-bold text-green-700 text-center pt-4">Frontend Form Vue and Typescript</h1>
        </div>
      </header>
  
      <main class="flex-1 overflow-y-auto p-4">
        <div class="container mx-auto">
          <slot></slot>
        </div>
      </main>
  
      <footer class="bg-green-100 text-white p-4">
        <div class="container mx-auto">
          <p class="text-center text-green-800">&copy; 2024 Marco Pellegrini</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  // Script setup vuoto, puoi aggiungere logica se necessario
  </script>
  
  <style scoped>
  /* Stili opzionali, puoi aggiungere altro se necessario */
  </style>
  