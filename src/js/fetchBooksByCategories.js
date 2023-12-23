import { fetchBooks } from './bookAPI.js';

const booksContainer = document.querySelector('.category-list');

booksContainer.addEventListener('click', event => {
  const targetButton = event.target.closest('button[name]');

  if (targetButton) {
    const categoryName = targetButton.getAttribute('name');
    displayBooksByCategory(categoryName);
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
        <div class="top-books__book">
          <div class="top-books__cover"><img src="${book.book_image}" alt="${book.title}"></div>
          <div class="top-books__title">${book.title}</div>
          <div class="top-books__author">${book.author}</div>
        </div>
      `;
    })
    .join('');

  const categoryTitleMarkup = `
    <div class="top-books__category">
      <h1>Books By Category</h1>
      <h2 class="top-books__category-title">${categoryName}</h2>
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
