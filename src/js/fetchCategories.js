import { fetchBooks } from './bookAPI.js';

/**
 * Displays book categories in the specified HTML container.
 * Fetches book categories using the fetchBooks function and updates the DOM accordingly.
 *
 * @returns {void}
 */
const displayCategories = async () => {
  // Select the HTML container for categories.
  const categoriesContainer = document.querySelector('.category-list');

  // Fetch book categories from the API.
  const bookCategories = await fetchBooks('category-list');

  // Create initial markup for "All categories" button.
  let markup = `<div>
          <button type="button" name="All categories">All categories</button>
        </div>`;

  // Append markup for each book category obtained from the API.
  markup += bookCategories
    .map(({ list_name }) => {
      return `<div>
            <button class="category-item" type="button" name="${list_name}">${list_name}</button>
        </div>`;
    })
    .join('');

  // Insert the generated markup into the categories container.
  categoriesContainer.insertAdjacentHTML('beforeend', markup);
};

// Call the displayCategories function to render book categories in the UI.
displayCategories();
