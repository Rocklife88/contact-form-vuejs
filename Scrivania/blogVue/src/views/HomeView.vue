<template>
  <main class="container mx-auto px-4">
    <div class="pt-6 pb-4 text-center md:text-left font-medium text-lg">Blog posts</div>
    <div class="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
      <!-- Componente CardPost per ogni post -->
      <CardPost v-for="blogPost in blogPosts" :key="blogPost.id" :post="blogPost" class="max-w-sm rounded overflow-hidden shadow-lg" @post-clicked="goToBlogPost"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import CardPost from '@/components/CardPost.vue';
import blogPost from '@/fakeData/posts.json';

const blogPosts = ref(blogPost); 

const goToBlogPost = (postId: string) => {
  router.push({ name: 'post', params: { id: postId } }); 
}

</script>
