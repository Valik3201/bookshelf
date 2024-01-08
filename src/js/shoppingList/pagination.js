import {
  getBooksFromLocalStorage,
  displayBooksFromLocalStorage,
  removeFromLocalStorage,
} from './localStorage.js';

/**
 * The current page number being displayed.
 * @type {number}
 */
let currentPage = 1;

/**
 * The number of books to display per page.
 * @type {number}
 */
const perPage = 3;

/**
 * Updates the displayed books and pagination based on the specified page and items per page.
 * @param {number} page - The page number to display.
 * @param {number} perPage - The number of books to display per page.
 * @returns {void}
 */
const updateDisplayedBooks = (page, perPage) => {
  // Retrieve all books from localStorage
  const storedBooks = getBooksFromLocalStorage();

  // Check if there are any books
  if (storedBooks.length === 0) {
    // If no books, display a message and clear the container
    const container = document.querySelector('.books-container');
    container.innerHTML = '';

    const imageBooks = new URL('/src/images/books.png', import.meta.url).href;

    // Display an empty message with an image
    const emptyMessageMarkup = `
      <div class="book-message">
        <p>This page is empty, add some books and proceed to order.</p>
        <img class="books-img" src="${imageBooks}" alt="books" />
      </div>
    `;

    container.innerHTML = emptyMessageMarkup;

    document.querySelector('.pagination').style.display = 'none';

    return;
  } else {
    // Display books and update pagination
    displayBooksFromLocalStorage(page, perPage);
    const totalPages = Math.ceil(storedBooks.length / perPage);
    const maxVisiblePages = 3;
    generatePageNumbers(totalPages, page, maxVisiblePages);
    updatePaginationButtons(page, perPage);
  }
};

/**
 * Removes a book from localStorage and updates the displayed books and pagination.
 * @param {string} bookId - The ID of the book to be removed.
 * @param {number} currentPage - The current page number.
 * @param {number} perPage - The number of books to display per page.
 * @returns {void}
 */
const removeBookAndUpdate = (bookId, currentPage, perPage) => {
  // Remove the book from localStorage
  removeFromLocalStorage(bookId);
  // Update the displayed books and pagination
  updateDisplayedBooks(currentPage, perPage);
};

// Get the container element for books
const container = document.querySelector('.books-container');

// Check if the container exists
if (container) {
  // Add a click event listener to the container
  container.addEventListener('click', event => {
    const deleteButton = event.target.closest('.button-delete');

    if (deleteButton) {
      const bookId = deleteButton.getAttribute('data-book-id');
      removeBookAndUpdate(bookId, currentPage, perPage);
    }
  });
}

/**
 * Updates the state of pagination buttons based on the current page and items per page.
 * @param {number} currentPage - The current page number.
 * @param {number} perPage - The number of books to display per page.
 * @returns {void}
 */
const updatePaginationButtons = (currentPage, perPage) => {
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');

  // Disable the "Previous" button if on the first page
  prevPageBtn.disabled = currentPage === 1;

  // Disable the "Next" button if on the last page or no books in localStorage
  const storedBooks = getBooksFromLocalStorage();
  nextPageBtn.disabled = currentPage * perPage >= storedBooks.length || storedBooks.length === 0;
};

// Add a click event listener for the "Previous" button
document.getElementById('prevPageBtn').addEventListener('click', () => {
  currentPage = Math.max(1, currentPage - 1);
  updateDisplayedBooks(currentPage, perPage);
});

// Add a click event listener for the "Next" button
document.getElementById('nextPageBtn').addEventListener('click', () => {
  const storedBooks = getBooksFromLocalStorage();
  const totalPages = Math.ceil(storedBooks.length / perPage);
  currentPage = Math.min(totalPages, currentPage + 1);
  updateDisplayedBooks(currentPage, perPage);
});

/**
 * Generates and updates the page numbers for pagination.
 * @param {number} totalPages - The total number of pages.
 * @param {number} currentPage - The current page number.
 * @param {number} maxVisiblePages - The maximum number of visible pages.
 * @returns {void}
 */
const generatePageNumbers = (totalPages, currentPage, maxVisiblePages) => {
  const pageNumbersContainer = document.getElementById('pageNumbers');
  pageNumbersContainer.innerHTML = '';

  if (totalPages <= maxVisiblePages) {
    // If total pages are less than or equal to the maximum visible pages, create buttons for all pages
    for (let i = 1; i <= totalPages; i++) {
      createPageButton(i, currentPage);
    }
  } else {
    // If total pages are more than the maximum visible pages, create buttons for first, last, and ellipsis
    const visiblePages = calculateVisiblePages(currentPage, totalPages, maxVisiblePages);

    if (!visiblePages.includes(1)) {
      // If the first page is not in visible pages, create an ellipsis button
      const ellipsisButtonStart = document.createElement('button');
      ellipsisButtonStart.textContent = '...';
      ellipsisButtonStart.disabled = true;
      pageNumbersContainer.appendChild(ellipsisButtonStart);
    }

    for (const page of visiblePages) {
      createPageButton(page, currentPage);
    }

    if (!visiblePages.includes(totalPages)) {
      // If the last page is not in visible pages, create an ellipsis button
      const ellipsisButtonEnd = document.createElement('button');
      ellipsisButtonEnd.textContent = '...';
      ellipsisButtonEnd.disabled = true;
      pageNumbersContainer.appendChild(ellipsisButtonEnd);
    }
  }
};

/**
 * Creates a button with the specified page number and adds a click event listener to update displayed books.
 * @param {number} pageNumber - The page number for the button.
 * @param {number} currentPage - The current page number.
 * @returns {void}
 */
const createPageButton = (pageNumber, currentPage) => {
  const pageNumbersContainer = document.getElementById('pageNumbers');

  const pageButton = document.createElement('button');
  pageButton.textContent = pageNumber;
  pageButton.addEventListener('click', () => {
    currentPage = pageNumber;
    updateDisplayedBooks(currentPage, perPage);
  });

  if (pageNumber === currentPage) {
    pageButton.classList.add('active');
  }

  pageNumbersContainer.appendChild(pageButton);
};

/**
 * Calculates the visible pages based on the current page, total pages, and maximum visible pages.
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {number} maxVisiblePages - The maximum number of visible pages.
 * @returns {number[]} - An array of visible page numbers.
 */
const calculateVisiblePages = (currentPage, totalPages, maxVisiblePages) => {
  const halfVisible = Math.floor(maxVisiblePages / 2);
  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  }

  if (endPage === totalPages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
};

// Add a click event listener for the "Go to first page" button
document.getElementById('firstPageBtn').addEventListener('click', () => {
  currentPage = 1;
  updateDisplayedBooks(currentPage, perPage);
});

// Add a click event listener for the "Go to last page" button
document.getElementById('lastPageBtn').addEventListener('click', () => {
  const storedBooks = getBooksFromLocalStorage();
  const totalPages = Math.ceil(storedBooks.length / perPage);
  currentPage = totalPages;
  updateDisplayedBooks(currentPage, perPage);
});

// Initial update of displayed books and pagination
updateDisplayedBooks(currentPage, perPage);
