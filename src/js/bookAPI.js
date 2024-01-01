import axios from 'axios';

export const API_URL = 'https://books-backend.p.goit.global/books/';

export const fetchBooks = async (endpoint, selectedCategory = '') => {
  try {
    const URL = selectedCategory
      ? `${API_URL}${endpoint}?category=${selectedCategory}`
      : `${API_URL}${endpoint}`;

    const response = await axios.get(URL);

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 404) {
      console.error('Error fetching: Not Found');
    } else if (response.status === 500) {
      console.error('Error fetching: Internal Server Error');
    } else {
      console.error('Error fetching: Unexpected status', response.status);
    }
  } catch (error) {
    console.error('Error fetching:', error.message);
    return null;
  }
};

// Dodaj funkcję fetchBookById
export const fetchBookById = async bookId => {
  try {
    const URL = `${API_URL}${bookId}`;
    const response = await axios.get(URL);

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 404) {
      console.error('Error fetching book: Not Found');
    } else if (response.status === 500) {
      console.error('Error fetching book: Internal Server Error');
    } else {
      console.error('Error fetching book: Unexpected status', response.status);
    }
  } catch (error) {
    console.error('Error fetching book:', error.message);
  }

  return null;
};
