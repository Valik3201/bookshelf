import { fetchBooks } from './bookAPI.js';
import { topBooksContainer, switchView } from './viewSwitcher.js';

/**
 * Displays top books in the specified HTML container.
 * Fetches top books using the fetchBooks function and updates the DOM accordingly.
 *
 * @returns {void}
 */
export const displayTopBooks = async () => {
  switchView('topBooks');

  // Fetch top books from the API.
  const topBooks = await fetchBooks('top-books');

  // Generate markup for each top book category.
  const markup = topBooks
    .map(category => {
      // Generate markup for each book within the category.
      const booksMarkup = category.books
        .map(({ title, author, book_image }) => {
          return `
          <div class="books__book">
            <div class="books__book--cover">
              <img src="${book_image}" alt="${title}">
              <div class="books__book--cover-overlay">
                <div class="books__book--cover-overlay-text">Quick View</div>
              </div>
            </div>
            <div class="books__book--title">${title}</div>
            <div class="books__book--author">${author}</div>
          </div>
        `;
        })
        .join('');

      // Combine category title, book markup, and "See more" button into a single category markup.
      return `
      <div class="books__category">
        <h2 class="books__category--title">${category.list_name}</h2>
        <div class="books__category--books">
          ${booksMarkup}
        </div>
        <button class="see-more-btn" type="button" name="See more" data-category="${category.list_name}">See more</button>
      </div>
    `;
    })
    .join('');

  // Insert the generated markup into the top books container.
  topBooksContainer.insertAdjacentHTML('beforeend', markup);
};

// Call the displayTopBooks function to render top books in the UI.
displayTopBooks();