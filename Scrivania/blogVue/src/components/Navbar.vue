<template>
  <nav ref="menuRef" class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4 container">
      <div class="flex justify-between container">
        <div class="flex space-x-6">
          <div>
            <!-- Website Logo -->
            <RouterLink to="/" class="flex items-center py-4 px-2">
              <span class="text-gray-500 text-lg font-thin">Marco's Blog</span>
            </RouterLink>
          </div>
          <!-- Primary Navbar items -->
          <div class=" hidden md:flex items space-x-1">
            <RouterLink class="py-4 px-2 text-gray-800 font-semibold" to="/">Home</RouterLink>
            <RouterLink class="py-4 px-2 text-gray-800 font-semibold" to="/about">About</RouterLink>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div :class="{ 'mobile-menu': menuOpen, hidden: !menuOpen }" class="md:hidden">
      <RouterLink @click="menuOpen = false" class="block py-2 px-4 text-sm hover:bg-gray-200" to="/">Home</RouterLink>
      <RouterLink @click="menuOpen = false" class="block py-2 px-4 text-sm hover:bg-gray-200" to="/about">About</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);
const toggleMenu = () => menuOpen.value = !menuOpen.value;

const menuRef = ref(null);
onClickOutside(menuRef, () => {
  if (menuOpen.value) {
    menuOpen.value = false;
  }
});
</script>

<style>
.mobile-menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 999;
  overflow-y: auto;
}

.hidden {
  display: none;
}
</style>
