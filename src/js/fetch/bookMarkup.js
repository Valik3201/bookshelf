/**
 * Generate HTML markup for displaying a book in the UI.
 *
 * @param {object} bookData - Object containing book details.
 * @param {string} bookData._id - Unique identifier for the book.
 * @param {string} bookData.title - Title of the book.
 * @param {string} bookData.author - Author of the book.
 * @param {string} bookData.book_image - URL of the book cover image.
 * @returns {string} - HTML markup for the book.
 */
export const createBookMarkup = ({ _id, title, author, book_image }) => {
  // URL for a placeholder image in case the actual cover image is not available
  const placeholderImageURL = new URL('/src/images/placeholder.jpg', import.meta.url).href;

  // HTML markup for displaying a book with lazy-loaded cover image
  return `
      <div class="books__book" data-book-id="${_id}">
        <div class="books__book--cover">
          <img class="lazyload" 
            src="${placeholderImageURL}"
            data-src="${book_image}"
            alt="${title}">
          <div class="books__book--cover-overlay">
            <div class="books__book--cover-overlay-text">Quick View</div>
          </div>
        </div>
        <div class="books__book--title">${title}</div>
        <div class="books__book--author">${author}</div>
      </div>
    `;
};
