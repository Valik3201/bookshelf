import axios from 'axios';

export const API_URL = 'https://books-backend.p.goit.global/books/';

export const fetchBooks = async (endpoint, selectedCategory = '') => {
  try {
    const URL = selectedCategory
      ? `${API_URL}${endpoint}?category=${selectedCategory}`
      : `${API_URL}${endpoint}`;

    const response = await axios.get(URL);

    return response.data;
  } catch (error) {
    console.error('Error fetching:', error.message);
    return null;
  }
};

export const customOrder = [
  'Combined Print and E-Book Fiction',
  'Combined Print and E-Book Nonfiction',
  'Hardcover Fiction',
  'Hardcover Nonfiction',
  'Paperback Trade Fiction',
  'Paperback Nonfiction',
  'Advice How-To and Miscellaneous',
  'Childrens Middle Grade Hardcover',
  'Middle Grade Paperback Monthly',
  'Young Adult Paperback Monthly',
  'Graphic Books and Manga',
  'Business Books',
  'Picture Books',
  'Young Adult Hardcover',
  'Audio Nonfiction',
  'Series Books',
  'Mass Market Monthly',
  'Audio Fiction',
];
