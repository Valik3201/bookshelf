import { fetchBooks } from './bookAPI.js';

const categoryItems = document.querySelectorAll('.category-item');

categoryItems.forEach(category => {
  category.addEventListener('click', event => {
    const clickedCategory = event.currentTarget;
    displayBooksByCategory(clickedCategory);
  });
});

const displayBooksByCategory = async item => {
  const booksCategory = item.textContent.trim();
  const booksByCategory = await fetchBooks('category', booksCategory);

  console.log(booksByCategory);

  const booksContainer = document.querySelector('.category');

  const markup = booksByCategory
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
          <h1>Books By Category</h1>
          <h2 class="top-books__category-title">${category.list_name}</h2>
          ${booksMarkup}
          <button type="button" name="${category.list_name}">See more</button>
        </div>
      `;
    })
    .join('');

  booksContainer.innerHTML = markup;
};

const seeMoreBtn = document.querySelector('#see-more-btn');

seeMoreBtn.addEventListener('click', () => {
  const categoryName = seeMoreBtn.getAttribute('name');
  displayBooksByCategory(categoryName);
});
