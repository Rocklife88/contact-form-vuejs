<template>
  <div @click="$emit('post-clicked', post.id)" class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
    <img class="w-full auto" :src="post.img" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ post.title }}</div>
      <p class="text-gray-700 text-base">
        {{ post.content }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['post-clicked'])

const props = defineProps({
  post: Object
});
</script>
