// Importing functions and elements from other modules
import { fetchTopBooks } from './bookAPI.js';
import { displayBookById } from './fetchBookById.js';
import { topBooksContainer, switchView } from './viewSwitcher.js';
import { createBookMarkup } from './bookMarkup.js';

/**
 * Displays top books in the specified HTML container.
 * Fetches top books using the fetchBooks function and updates the DOM accordingly.
 *
 * @returns {void}
 */
export const displayTopBooks = async () => {
  // Switch the view to 'topBooks'
  switchView('topBooks');

  // Fetch top books from the API.
  const topBooks = await fetchTopBooks();

  // Generate markup for each top book category.
  const markup = topBooks
    .map(category => {
      // Generate markup for each book in the current category
      const booksMarkup = category.books.map(book => createBookMarkup(book)).join('');

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

  const blocks = document.querySelectorAll('.books__category');

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    // Iterate over each block and check its visibility
    blocks.forEach(block => {
      let blockPosition = block.getBoundingClientRect().top;

      // Check if the block is in the viewport
      if (blockPosition < windowHeight + 400) {
        block.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        block.style.opacity = '1';
        block.style.transform = 'translateY(0)';
      } else {
        block.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        block.style.opacity = '0';
        block.style.transform = 'translateY(100%)';
      }
    });
  }

  // Initial check for block visibility
  checkBlocksVisibility();

  // Add a scroll event listener to continuously check and update block visibility
  window.addEventListener('scroll', function () {
    checkBlocksVisibility();
  });

  // Iterate over each book container
  bookContainers.forEach(bookContainer => {
    // Add event listener for click events on books inside the current container
    bookContainer.addEventListener('click', event => {
      const targetBook = event.target.closest('.books__book');

      // If a book is clicked, get its ID and display details
      if (targetBook) {
        const bookId = targetBook.dataset.bookId;
        displayBookById(bookId);
      }
    });
  });
};

// Call the displayTopBooks function to render top books in the UI.
displayTopBooks();
