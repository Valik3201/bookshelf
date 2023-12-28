import { fetchBooks } from './bookAPI.js';
import { displayTopBooks } from './fetchBooks.js';
import { displayBookById } from './fetchBookById.js';
import { topBooksContainer, booksContainer, switchView } from './viewSwitcher.js';

const displayBooksByCategory = async categoryName => {
  const booksByCategory = await fetchBooks('category', categoryName);

  if (!booksByCategory || !Array.isArray(booksByCategory)) {
    console.error('Invalid response from fetchBooks:', booksByCategory);
    return;
  }

  switchView('category');

  const booksMarkup = booksByCategory
    .flat()
    .map(book => {
      return `
      <div class="books__book" data-book-id="${book._id}">
        <div class="books__book--cover">
          <img loading="lazy" src="${book.book_image}" alt="${book.title}">
          <div class="books__book--cover-overlay">
            <div class="books__book--cover-overlay-text">Quick View</div>
          </div>
        </div>
        <div class="books__book--title">${book.title}</div>
        <div class="books__book--author">${book.author}</div>
      </div>
      `;
    })
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
      console.log('Displaying book with ID:', bookId);
      displayBookById(bookId);
    });
  });
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

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
    }
  }
});
