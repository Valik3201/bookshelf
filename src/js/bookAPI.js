import axios from 'axios';

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
    // Construct the complete URL based on the endpoint and optional category.
    const URL = selectedCategory
      ? `${API_URL}${endpoint}?category=${selectedCategory}`
      : `${API_URL}${endpoint}`;

    // Make a GET request using axios.
    const response = await axios.get(URL);

    // Return the data received in the response.
    return response.data;
  } catch (error) {
    // Log an error message if fetching fails and return null.
    console.error('Error fetching:', error.message);
    return null;
  }
};
