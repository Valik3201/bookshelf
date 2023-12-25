import { fetchBooks } from './bookAPI.js';
import { displayTopBooks } from './fetchBooks.js';

const booksContainer = document.querySelector('.category-list');

booksContainer.addEventListener('click', event => {
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

const displayBooksByCategory = async categoryName => {
  const booksByCategory = await fetchBooks('category', categoryName);

  if (!booksByCategory || !Array.isArray(booksByCategory)) {
    console.error('Invalid response from fetchBooks:', booksByCategory);
    return;
  }

  const booksContainer = document.querySelector('.category');

  const booksMarkup = booksByCategory
    .flat()
    .map(book => {
      return `
      <div class="books-category__book">
        <div class="books-category__cover"><img src="${book.book_image}" alt="${book.title}"></div>
        <div class="books-category__title">${book.title}</div>
        <div class="books-category__author">${book.author}</div>
      </div>    
      `;
    })
    .join('');

  const categoryTitleMarkup = `
    <div class="books-category">
      <h2 class="books-category__category-title">${categoryName}</h2>
    </div>
  `;

  booksContainer.innerHTML = categoryTitleMarkup + booksMarkup;
};

const topBooksContainer = document.querySelector('.top-books');

topBooksContainer.addEventListener('click', event => {
  const seeMoreBtn = event.target.closest('button[name="See more"]');

  if (seeMoreBtn) {
    const categoryName = seeMoreBtn.getAttribute('data-category');
    displayBooksByCategory(categoryName);
  }
});
