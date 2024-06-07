<template>
    <transition name="fade" mode="out-in">
      <div class="max-w-md w-full h-3/6 shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800" :key="quote">
        <div class="p-6 text-center">
          <h3 class="text-white text-xl font-semibold">{{ author }}</h3>
          <p class="text-white mt-2">&ldquo;{{ quote }}&rdquo;</p>
        </div>
        <div class="p-4 text-center">
          <button @click="$emit('new-quote')" class="bg-white text-blue-800 py-2 px-4 rounded hover:text-white hover:bg-blue-700 focus:outline-none">
            New Quote
          </button>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  interface Props {
    author: string;
    quote: string;
  }
  
  const props = defineProps<Props>();
  
  const emits = defineEmits(['new-quote']);
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  