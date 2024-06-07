<template>
  <HomeLayout class="overflow-hidden">

      <RouterView />

  </HomeLayout>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomeLayout from "./assets/layout/HomeLayout.vue";
</script>

<style scoped></style>
