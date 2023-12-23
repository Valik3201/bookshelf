import { fetchBooks } from './bookAPI.js';

const displayTopBooks = async () => {
  const topBooksContainer = document.querySelector('.top-books');

  const topBooks = await fetchBooks('top-books');

  // Создание разметки для каждой категории
  const markup = topBooks
    .map(category => {
      const booksMarkup = category.books
        .map(({ title, author, book_image }) => {
          return `
          <div class="top-books__book">
            <div class="top-books__cover"><img src="${book_image}" alt="${title}"></div>
            <div class="top-books__title">${title}</div>
            <div class="top-books__author">${author}</div>
          </div>
        `;
        })
        .join('');

      return `
      <div class="top-books__category">
        <h2 class="top-books__category-title category-item">${category.list_name}</h2>
        ${booksMarkup}
        <button class="see-more-btn" type="button" name="See more" data-category="${category.list_name}">See more</button>
      </div>
    `;
    })
    .join('');

  topBooksContainer.insertAdjacentHTML('beforeend', markup);
};

// Вызов функции для отображения книг по категориям
displayTopBooks();
