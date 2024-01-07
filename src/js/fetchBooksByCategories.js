// Importing functions and elements from other modules
import { fetchBooksByCategory } from './bookAPI.js';
import { displayTopBooks } from './fetchBooks.js';
import { displayBookById } from './fetchBookById.js';
import { topBooksContainer, booksContainer, switchView } from './viewSwitcher.js';
import { createBookMarkup } from './bookMarkup.js';

/**
 * Display books for a specific category.
 * @param {string} categoryName - The name of the category.
 */
const displayBooksByCategory = async categoryName => {
  // Fetch books for the specified category
  const booksByCategory = await fetchBooksByCategory(categoryName);

  // Check if the response is valid
  if (!booksByCategory || !Array.isArray(booksByCategory)) {
    console.error('Invalid response from fetchBooks:', booksByCategory);
    return;
  }

  // Switch the view to the 'category' view
  switchView('category');

  // Generate markup for the books in the category
  const booksMarkup = booksByCategory
    .flat()
    .map(book => createBookMarkup(book))
    .join('');

  // Generate markup for the category title and books
  const categoryTitleMarkup = `
    <div class="books-category visible" data-category="${categoryName}">
      <h2 class="books__heading">${categoryName}</h2>
      <div class="books__category--books">
        ${booksMarkup}
      </div>
    </div>
  `;

  // Update the content of the booksContainer with the generated markup
  booksContainer.innerHTML = categoryTitleMarkup;

  // Add click event listeners to each book for displaying details
  const books = document.querySelectorAll('.books__book');

  books.forEach(book => {
    book.addEventListener('click', () => {
      const bookId = book.dataset.bookId;
      displayBookById(bookId);
    });
  });
};

/**
 * Scroll to the category section.
 */
const scrollToCategory = () => {
  if (booksContainer) {
    booksContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    console.error('Books not found.');
  }
};

// Event listener for 'See more' button in the topBooksContainer
topBooksContainer.addEventListener('click', event => {
  const seeMoreBtn = event.target.closest('button[name="See more"]');

  if (seeMoreBtn) {
    // Get the category name from the button attribute
    const categoryName = seeMoreBtn.getAttribute('data-category');

    // Display books for the selected category
    displayBooksByCategory(categoryName);

    // Highlight the active category button and scroll to it
    const categoryListButtons = document.querySelectorAll('.category-list button[name]');
    categoryListButtons.forEach(button => {
      button.classList.remove('active');
      if (button.getAttribute('name') === categoryName) {
        button.classList.add('active');
        button.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    });

    // Scroll to the category section
    scrollToCategory();
  }
});

// Event listener for category buttons in the categoryListContainer
const categoryListContainer = document.querySelector('.category-list');
categoryListContainer.addEventListener('click', event => {
  const targetButton = event.target.closest('button[name]');

  if (targetButton) {
    // Remove 'active' class from all buttons and add it to the clicked button
    const allButtons = document.querySelectorAll('button[name]');
    allButtons.forEach(button => button.classList.remove('active'));
    targetButton.classList.add('active');

    // Get the category name from the clicked button
    const categoryName = targetButton.getAttribute('name');

    // Display books based on the selected category or display top books for 'All categories'
    if (categoryName === 'All categories') {
      displayTopBooks();
    } else {
      displayBooksByCategory(categoryName);
      // Scroll to the category section
      scrollToCategory();
    }
  }
});
