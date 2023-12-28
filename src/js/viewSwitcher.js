export const topBooksContainer = document.querySelector('[data-content="top-books"]');
export const booksContainer = document.querySelector('[data-content="category"]');

export const switchView = view => {
  if (view === 'topBooks') {
    topBooksContainer.classList.add('visible');
    topBooksContainer.classList.remove('right', 'hidden');
    booksContainer.classList.remove('visible');
    booksContainer.classList.add('left', 'hidden');
  } else if (view === 'category') {
    booksContainer.classList.add('visible');
    booksContainer.classList.remove('left', 'hidden');
    topBooksContainer.classList.remove('visible');
    topBooksContainer.classList.add('right', 'hidden');
  }
};
