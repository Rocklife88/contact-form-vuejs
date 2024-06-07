<template>
    <div class="flex flex-column min-h-full">
      <!-- Header -->
      <div ref="elRef" class="sticky top-0 w-full bg-white z-5">
        <slot name="header" />
      </div>
  
      <!-- Contenuto Principale -->
      <div :class="classContent" class="flex-grow-1">
        <slot />
      </div>
  
      <!-- Loader, se necessario -->
      <div v-if="isLoading">
        <slot name="isLoading"></slot>
      </div>
  
      <!-- Footer -->
      <div class="mt-auto w-full">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps(['isLoading', 'classContent']);
  </script>
  
  <style scoped></style>
  