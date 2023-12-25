export const topBooksContainer = document.querySelector('#top-books');
export const booksContainer = document.querySelector('#category');

export const switchView = view => {
  if (view === 'topBooks') {
    topBooksContainer.style.display = 'flex';
    booksContainer.style.display = 'none';
  } else if (view === 'category') {
    topBooksContainer.style.display = 'none';
    booksContainer.style.display = 'flex';
  }
};
