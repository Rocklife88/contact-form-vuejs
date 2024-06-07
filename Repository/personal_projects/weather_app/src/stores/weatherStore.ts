import { defineStore } from 'pinia';
import * as api from '@/api/weatherApi';
import type { WeatherResponse, CitySearchResult } from '../api/weatherApiInterfaces';

interface WeatherState {
  currentWeather: WeatherResponse | null;
  error: string | null;
  loading: boolean;
}

export const useWeatherStore = defineStore('weather', {
  state: (): WeatherState => ({
    currentWeather: null,
    error: null,
    loading: false
  }),
  actions: {
    async loadWeather(location: string) {
      this.loading = true;
      try {
        const data = await api.fetchCurrentWeather(location);
        this.currentWeather = data;
        this.error = null;
      } catch (error) {
        this.error = 'Failed to load weather data';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async searchCities(query: string): Promise<CitySearchResult[]> {
      this.loading = true;
      try {
        return await api.searchCities(query);
      } catch (error) {
        this.error = 'Failed to search cities';
        console.error(error);
        return [];
      } finally {
        this.loading = false;
      }
    },
  }
});
