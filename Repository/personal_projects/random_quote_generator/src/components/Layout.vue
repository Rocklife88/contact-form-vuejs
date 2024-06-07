<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-r from-blue-900 via-blue-600 to-blue-200">
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>

    <main class="flex-grow">
      <slot></slot>
    </main>

    <footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Stili opzionali per il layout */
</style>
