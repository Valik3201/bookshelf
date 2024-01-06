export const createBookMarkup = ({ _id, title, author, book_image }) => {
  const placeholderImageURL = new URL('/src/images/placeholder.jpg', import.meta.url).href;

  return `
      <div class="books__book" data-book-id="${_id}">
        <div class="books__book--cover">
          <img class="lazyload" 
            src="${placeholderImageURL}"
            data-src="${book_image}"
            alt="${title}">
          <div class="books__book--cover-overlay">
            <div class="books__book--cover-overlay-text">Quick View</div>
          </div>
        </div>
        <div class="books__book--title">${title}</div>
        <div class="books__book--author">${author}</div>
      </div>
    `;
};
