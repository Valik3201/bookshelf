import { fetchBooksByCategory } from './bookAPI.js';
import { displayTopBooks } from './fetchBooks.js';
import { displayBookById } from './fetchBookById.js';
import { topBooksContainer, booksContainer, switchView } from './viewSwitcher.js';
import { createBookMarkup } from './bookMarkup.js';

const displayBooksByCategory = async categoryName => {
  const booksByCategory = await fetchBooksByCategory(categoryName);

  if (!booksByCategory || !Array.isArray(booksByCategory)) {
    console.error('Invalid response from fetchBooks:', booksByCategory);
    return;
  }

  switchView('category');

  const booksMarkup = booksByCategory
    .flat()
    .map(book => createBookMarkup(book))
    .join('');

  const categoryTitleMarkup = `
    <div class="books-category visible" data-category="${categoryName}">
      <h2 class="books__heading">${categoryName}</h2>
      <div class="books__category--books">
        ${booksMarkup}
      </div>
    </div>
  `;

  booksContainer.innerHTML = categoryTitleMarkup;

  const books = document.querySelectorAll('.books__book');

  books.forEach(book => {
    book.addEventListener('click', () => {
      const bookId = book.dataset.bookId;
      displayBookById(bookId);
    });
  });
};

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

topBooksContainer.addEventListener('click', event => {
  const seeMoreBtn = event.target.closest('button[name="See more"]');

  if (seeMoreBtn) {
    const categoryName = seeMoreBtn.getAttribute('data-category');
    displayBooksByCategory(categoryName);

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

    scrollToCategory();
  }
});

const categoryListContainer = document.querySelector('.category-list');

categoryListContainer.addEventListener('click', event => {
  const targetButton = event.target.closest('button[name]');

  if (targetButton) {
    const allButtons = document.querySelectorAll('button[name]');
    allButtons.forEach(button => button.classList.remove('active'));

    targetButton.classList.add('active');

    const categoryName = targetButton.getAttribute('name');

    if (categoryName === 'All categories') {
      displayTopBooks();
    } else {
      displayBooksByCategory(categoryName);
      scrollToCategory();
    }
  }
});
