import { fetchBooks } from './bookAPI.js';

const openMenuButton = document.querySelector('.open-mobile-menu');
const closeMenuButton = document.querySelector('.close-button');
const mobileMenuField = document.querySelector('.mobile-menu-field');
const mobileMenuBackground = document.querySelector('.background-cover-container');
const windowSize = window.matchMedia('(min-width: 768px)');
const categoryName = 'Series Books';

const displayBooksByCategory = async categoryName => {
  const booksByCategory = await fetchBooks('category', categoryName);

  if (!booksByCategory || !Array.isArray(booksByCategory)) {
    console.error('Invalid response from fetchBooks:', booksByCategory);
    return;
  }

  const booksMarkup = booksByCategory
    .flat()
    .map(book => {
      return `<div class="background-cover">
          <img src="${book.book_image}" alt="${book.title}">
          </div>
      `;
    })
    .join('');

  mobileMenuBackground.insertAdjacentHTML('beforeend', booksMarkup);
};

const openMenu = () => {
  mobileMenuField.style.display = 'block';
  setTimeout(() => {
    mobileMenuField.style.transform = 'translateY(0)';
  }, 1);
  displayBooksByCategory(categoryName);
};

const closeMenu = () => {
  mobileMenuField.style.transform = 'translateY(-100%)';

  setTimeout(() => {
    mobileMenuField.style.display = 'none';
  }, 500);
};

//closing mobile menu function if window size is bigger than 768px
function mobileMenuClose(event) {
  if (event.matches) {
    mobileMenuField.style.display = 'none';
  }
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
windowSize.addEventListener('change', mobileMenuClose);
