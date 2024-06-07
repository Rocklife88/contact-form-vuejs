<template>
  <div class="container mx-auto p-4 flex flex-col items-center justify-center">
    <h1 class="text-3xl text-teal-600 mb-6 font-bold">VueWeather Forecast App</h1>
    
    <div class="w-full max-w-4xl">
      <div class="flex justify-center items-center gap-1">
        <input type="text" v-model="cityQuery" @input="debouncedSearch" placeholder="Search for a city..."
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 lg:w-1/2">
        <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-5 text-nowrap rounded" @click="resetInput()">Reset Input</button>
      </div>
      
      <ul v-if="searchResults.length" class="mt-0  shadow-sm p-4 border-top-none rounded-md md:ml-40 md:w-1/2 w-full">
        <li v-for="city in searchResults" :key="city.id" @click="selectCity(city.name)"
            class="cursor-pointer rounded-md transition-colors text-gray-700">
          {{ city.name }}
        </li>
      </ul>
    </div>
    
    <div v-if="weatherStore.currentWeather" class="mt-6 mb-4 max-w-xl w-full bg-teal-500 rounded-lg shadow-md overflow-hidden flex items-center">
      <div class="px-6 py-4 flex flex-col justify-center mx-auto gap-1">
        <div class="font-bold text-3xl mb-2 text-gray-200">Weather in: <span class="text-teal-800">{{ weatherStore.currentWeather.location.name }}</span></div>
        <p class="text-gray-100 text-2xl font-semibold">Temperature: <span class="text-teal-800 text-2xl">{{ weatherStore.currentWeather.current.temp_c }}°C</span></p>
        <p class="text-gray-100 text-2xl font-semibold">Condition: <span class="text-teal-800 text-2xl">{{ weatherStore.currentWeather.current.condition.text }}</span></p>
        <p class="text-gray-100  text-2xl font-semibold">Humidity: <span class="text-teal-800 text-2xl">{{ weatherStore.currentWeather.current.humidity }}%</span></p>
        <p class="text-gray-100 text-2xl font-semibold">Wind: <span class="text-teal-800 text-2xl"> {{ weatherStore.currentWeather.current.wind_kph }} km/h </span></p>
        <p class="text-gray-100  text-2xl font-semibold">Last Updated: <span class="text-teal-800 text-2xl">{{ weatherStore.currentWeather.current.last_updated }}</span></p>
        <div>
          <img  :src="weatherStore.currentWeather.current.condition.icon" alt="Weather icon">
        </div>
      </div>
    </div>
    
    <p v-if="weatherStore.error" class="text-red-500 text-sm mt-4">
      {{ weatherStore.error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref , watch} from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
import {debounce} from 'lodash';
import type { CitySearchResult } from '@/api/weatherApiInterfaces'; 
import HomeLayout from '@/assets/layout/HomeLayout.vue';


const weatherStore = useWeatherStore();
const cityQuery = ref('');
const searchResults = ref<CitySearchResult[]>([]);

const resetInput = () => {
  cityQuery.value = '';
  weatherStore.currentWeather = null;
};

const searchCities = async () => {
  if (cityQuery.value) {
    searchResults.value = await weatherStore.searchCities(cityQuery.value);
    weatherStore.currentWeather = null;
    searchResults.value = searchResults.value.slice(0, 5);
  }
};

const debouncedSearch = debounce(searchCities, 300);

const selectCity = (cityName: string) => {
  weatherStore.loadWeather(cityName);
  searchResults.value = []; // Clear results after selection
};

watch(cityQuery, (newValue) => {
  if (!newValue) {
    searchResults.value = [];
  }
});
</script>
