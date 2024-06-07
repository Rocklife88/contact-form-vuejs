<template>
  <Layout>

    <div class="flex justify-center items-center min-h-full">
      <RouterView />
    </div>
    <template #footer>
      <Footer />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Stili opzionali per App.vue */
</style>
