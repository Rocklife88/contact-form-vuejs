<template>
  <div>
    <Header />
    <div class="flex flex-column items-center justify-center w-full h-full" :style="{ minHeight: contentHeight, paddingBottom: footerHeight }">
      <slot />
    </div>
    <Footer class="fixed bottom-0 left-0 w-full" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const footerHeight = computed(() => {
  const footer = document.querySelector('.footer');
  return footer ? `${footer.clientHeight}px` : '0';
});

const contentHeight = computed(() => `calc(100vh - ${footerHeight.value})`);
</script>
