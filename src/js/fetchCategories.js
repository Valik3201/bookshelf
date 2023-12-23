import { fetchBooks } from './bookAPI.js';

// Call the function to fetch and display categories when the window is loaded
const displayCategories = async () => {
  const categoriesContainer = document.querySelector('.category-list');

  // Wait for fetchCategories to complete before continuing
  const bookCategories = await fetchBooks('category-list');

  let markup = `<div>
            <div>All categories</div>
        </div>`;

  // Append each category to the markup
  markup += bookCategories
    .map(({ list_name }) => {
      return `<div>
            <button class="category-item" type="button" name="${list_name}">${list_name}</button>
        </div>`;
    })
    .join('');

  // Inserting the generated HTML markup into the specified container
  categoriesContainer.insertAdjacentHTML('beforeend', markup);
};

displayCategories();
