import axios from 'axios';

const baseURL = 'http://api.weatherapi.com/v1';
const apiKey = '2bf6bceb19bc4708a0474743242404';

export const fetchCurrentWeather = async (query : string) => {
  const response = await axios.get(`${baseURL}/current.json`, {
    params: { key: apiKey, q: query }
  });
  return response.data;
};

export const searchCities = async (query: string) => {
  const response = await axios.get(`${baseURL}/search.json`, {
    params: { key: apiKey, q: query }
  });
  return response.data;
};
