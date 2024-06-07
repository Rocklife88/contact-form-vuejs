import axios from 'axios';

export interface Quote {
  text: string;
  author: string;
}

export const fetchQuotes = async (): Promise<Quote[]> => {
  try {
    const response = await axios.get<Quote[]>('https://type.fit/api/quotes');
    return response.data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
}
