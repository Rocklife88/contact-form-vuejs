<template>
    <div>
    <div ref="homeHeadingRef">
      <Navbar/>
    </div>
    <div class="flex ">
      <div class=" w-full h-full flex overflow-auto p-4 container-fluid mx-auto " :style="{ height: contentHeight }">
        <slot />
      </div>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import {ref, onMounted, computed} from 'vue'
  import Navbar from'@/components/Navbar.vue'

  const homeHeadingRef = ref<HTMLElement | null>(null);
  const contentHeight = computed(() => {
    if (homeHeadingRef.value) {
      const headerHeight = homeHeadingRef.value.clientHeight;
      return `calc(100vh - ${headerHeight}px)`;
    }
    return '100vh'; 
  });
  
  onMounted(() => {
    if (homeHeadingRef.value) {
      const headerHeight = homeHeadingRef.value.clientHeight;
      console.log('Header Height:', headerHeight);
    }
  });
  </script>