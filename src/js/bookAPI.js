import axios from 'axios';

import { Notify, Loading } from './notiflixConfig.js';

/**
 * Base URL for the Books API.
 * @type {string}
 */
const API_URL = 'https://books-backend.p.goit.global/books/';

/**
 * Builds the complete URL for an API endpoint with optional query parameters.
 *
 * @param {string} endpoint - The API endpoint.
 * @param {Object} params - Optional query parameters.
 * @returns {string} The complete URL.
 */
const buildURL = (endpoint, params = {}) => {
  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

  return queryString ? `${API_URL}${endpoint}?${queryString}` : `${API_URL}${endpoint}`;
};

/**
 * Fetches the list of categories from the Books API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of categories.
 */
export const fetchCategories = async () => {
  try {
    Loading.dots();
    const URL = buildURL('category-list');
    const response = await axios.get(URL);

    // Check the HTTP status code and handle accordingly.
    handleResponse(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    Notify.failure('Failed to fetch categories. Please try again later.');
    return null;
  } finally {
    Loading.remove(500);
  }
};

/**
 * Fetches the list of top books from the Books API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of top books.
 */
export const fetchTopBooks = async () => {
  try {
    Loading.dots();
    const URL = buildURL('top-books');
    const response = await axios.get(URL);

    // Check the HTTP status code and handle accordingly.
    handleResponse(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching top books:', error.message);
    Notify.failure('Failed to fetch top books. Please try again later.');
    return null;
  } finally {
    Loading.remove(500);
  }
};

/**
 * Fetches books belonging to a specific category from the Books API.
 *
 * @param {string} category - The category to filter books.
 * @returns {Promise<Array>} A promise that resolves to an array of books.
 */
export const fetchBooksByCategory = async category => {
  try {
    Loading.dots();
    const URL = buildURL('category', { category });
    const response = await axios.get(URL);

    // Check the HTTP status code and handle accordingly.
    handleResponse(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching books by category:', error.message);
    Notify.failure('Failed to fetch books by category. Please try again later.');
    return null;
  } finally {
    Loading.remove(500);
  }
};

/**
 * Fetches a specific book by its ID from the Books API.
 *
 * @param {string} id - The ID of the book.
 * @returns {Promise<Object>} A promise that resolves to the book object.
 */
export const fetchBookById = async id => {
  try {
    Loading.dots();
    const URL = buildURL(id);
    const response = await axios.get(URL);

    // Check the HTTP status code and handle accordingly.
    handleResponse(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching book by ID:', error.message);
    Notify.failure('Failed to fetch book by ID. Please try again later.');
    return null;
  } finally {
    Loading.remove(500);
  }
};

/**
 * Handles the API response based on HTTP status codes.
 *
 * @param {Object} response - The Axios response object.
 */
const handleResponse = response => {
  if (response.status === 200) {
    // Do nothing for successful response
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
};
