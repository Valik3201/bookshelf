// Import Axios library
import axios from 'axios';

// API URL for book categories
const API_URL = 'https://books-backend.p.goit.global/books/category-list';

// Function to fetch book categories and display them in HTML
const fetchCategories = async () => {
  try {
    // Fetch book categories from the API
    const response = await axios.get(API_URL);

    // Extract categories from the response
    const categories = response.data;

    // Define the desired order of categories
    const customOrder = [
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

    // Sort the categories based on the custom order
    const sortedCategories = customOrder.map(categoryName => {
      const category = categories.find(c => c.list_name === categoryName);
      return category || { list_name: categoryName }; // Handle missing categories
    });

    return sortedCategories;
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
