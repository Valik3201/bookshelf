// Import Axios library
import axios from 'axios';

// API URL for book categories
const API_URL = 'https://books-backend.p.goit.global/books/category-list';

const bookContainer = document.querySelector('.book-categories');

// Function to fetch book categories and display them in HTML
const fetchCategories = async () => {
  try {
    // Fetch book categories from the API
    const response = await axios.get(API_URL);

    // Extract categories from the response
    const categories = response.data;

    return categories;
  } catch (error) {
    console.error('Error fetching book categories:', error.message);
    return null;
  }
};

// Call the function to fetch and display categories when the window is loaded
const displayCategories = async () => {
  const bookContainer = document.querySelector('.book-categories');

  // Wait for fetchCategories to complete before continuing
  const bookCategories = await fetchCategories();

  let markup = `<div>
            <div>All categories</div>
        </div>`;

  // Append each category to the markup
  markup += bookCategories
    .map(({ list_name }) => {
      return `<div>
            <div>${list_name}</div>
        </div>`;
    })
    .join('');

  // Inserting the generated HTML markup into the specified container
  bookContainer.insertAdjacentHTML('beforeend', markup);
};

displayCategories();
