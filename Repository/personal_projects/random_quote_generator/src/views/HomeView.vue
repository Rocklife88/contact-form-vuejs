<template>
  <div class="flex justify-center items-center min-h-screen ">
    <template v-if="isLoading">
      <div class="flex items-center justify-center">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    </template>
    <template v-else>
      <QuoteCard
        :author="currentAuthor"
        :quote="currentQuote"
        @new-quote="handleNewQuote"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import QuoteCard from '../components/QuoteCard.vue';
import { fetchQuotes, Quote } from '../api/quotes';

const isLoading = ref(true);
const currentAuthor = ref('');
const currentQuote = ref('');
const quotes = ref<Quote[]>([]);

const fetchNewQuote = () => {
  if (quotes.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.value.length);
    const randomQuote = quotes.value[randomIndex];
    currentAuthor.value = randomQuote.author || 'Unknown';
    currentQuote.value = randomQuote.text;
  }
};

const handleNewQuote = () => {
  isLoading.value = true;
  setTimeout(() => {
    fetchNewQuote();
    isLoading.value = false;
  }, 1000); // Simula un ritardo di 1 secondo per mostrare lo spinner
};

const loadQuotes = async () => {
  try {
    const response = await fetchQuotes();
    quotes.value = response;

    // Aggiungi un ritardo di 2 secondi per il caricamento iniziale
    setTimeout(() => {
      fetchNewQuote();
      isLoading.value = false;
    }, 2000);
  } catch (error) {
    console.error('Error loading quotes:', error);
    isLoading.value = false;
  }
};

onMounted(loadQuotes);
</script>

<style>
/* Stili opzionali per il genitore */
</style>
