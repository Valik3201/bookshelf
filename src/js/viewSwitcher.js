// DOM elements representing containers for top books and category books
export const topBooksContainer = document.querySelector('[data-content="top-books"]');
export const booksContainer = document.querySelector('[data-content="category"]');

/**
 * Switch between views (top books and category books) by manipulating CSS classes.
 * @param {string} view - The view to switch to ('topBooks' or 'category').
 */
export const switchView = view => {
  if (view === 'topBooks') {
    // Show and position the topBooksContainer while hiding the booksContainer
    topBooksContainer.classList.add('visible');
    topBooksContainer.classList.remove('right', 'hidden');
    booksContainer.classList.remove('visible');
    booksContainer.classList.add('left', 'hidden');
  } else if (view === 'category') {
    // Show and position the booksContainer while hiding the topBooksContainer
    booksContainer.classList.add('visible');
    booksContainer.classList.remove('left', 'hidden');
    topBooksContainer.classList.remove('visible');
    topBooksContainer.classList.add('right', 'hidden');
  }
};
