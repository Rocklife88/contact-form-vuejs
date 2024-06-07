

<template>
  <HomeLayout>
    <RouterView />
  </HomeLayout>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from '@/components/Navbar.vue'
import HomeLayout from "./layout/HomeLayout.vue";
</script>


