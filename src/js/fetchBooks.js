import { fetchBooks } from './bookAPI.js';
import { displayBookById } from './fetchBookById.js';
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
        .map(({ title, author, book_image, _id }) => {
          return `
          <div class="books__book" data-book-id="${_id}">
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
  topBooksContainer.innerHTML = `
      <h1 class="books__heading">Best Sellers <span class="books__heading--highlight">Books</span></h1>
      ${markup}`;

  // Select all elements with the class 'books__category--books'
  const bookContainers = document.querySelectorAll('.books__category--books');

  // Iterate over each book container
  bookContainers.forEach(bookContainer => {
    // Add event listener for click events on books inside the current container
    bookContainer.addEventListener('click', event => {
      const targetBook = event.target.closest('.books__book');

      if (targetBook) {
        const bookId = targetBook.dataset.bookId;

        console.log('Displaying book with ID:', bookId);
        displayBookById(bookId);
      }
    });
  });
};

// Call the displayTopBooks function to render top books in the UI.
displayTopBooks();
