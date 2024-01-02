import axios from 'axios';

import { Notify, Loading } from './notiflixConfig.js';

/**
 * The base URL for the books API.
 * @type {string}
 */
export const API_URL = 'https://books-backend.p.goit.global/books/';

/**
 * Fetches books from the specified API endpoint.
 *
 * @param {string} endpoint - The endpoint to fetch books from.
 * @param {string} [selectedCategory=''] - Optional parameter for filtering books by category.
 * @returns {Promise<Object[] | null>} A promise that resolves to an array of book objects or null if an error occurs.
 */
export const fetchBooks = async (endpoint, selectedCategory = '') => {
  try {
    // Display loading dots while fetching data.
    Loading.dots();

    // Construct the complete URL based on the endpoint and optional category.
    const URL = selectedCategory
      ? `${API_URL}${endpoint}?category=${selectedCategory}`
      : `${API_URL}${endpoint}`;

    // Make a GET request using axios.
    const response = await axios.get(URL);

    // Check the HTTP status code and handle accordingly.
    if (response.status === 200) {
      // Return the data received in the response.
      return response.data;
    } else if (response.status === 404) {
      // Handle 404 Not Found
      console.error('Error fetching: Not Found');
      Notify.failure('Books not found. Please check your search criteria.');
    } else if (response.status === 500) {
      // Handle 500 Internal Server Error
      console.error('Error fetching: Internal Server Error');
      Notify.failure('Internal server error. Please try again later.');
    } else {
      // Handle other status codes if needed
      console.error('Error fetching: Unexpected status', response.status);
      Notify.failure('An unexpected error occurred. Please try again later.');
    }
  } catch (error) {
    // Log an error message if fetching fails and return null.
    console.error('Error fetching:', error.message);
    Notify.failure('Failed to fetch books. Please try again later.');
    return null;
  } finally {
    // Remove loading indicators
    Loading.remove(500);
  }
};
