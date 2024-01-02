import { fetchBooks } from './bookAPI.js';
import { addToLocalStorage } from './localStorage.js';
import { modalContainer, toggleModal } from './modalHandler.js';

/**
 * Display book details by ID in a modal pop-up.
 * @param {string} bookId - The ID of the book to display.
 * @returns {void}
 */
export const displayBookById = async bookId => {
  // Open the modal window
  toggleModal(true);

  // Fetch book details using the provided bookId
  const bookById = await fetchBooks(`${bookId}`);

  // Destructure book details
  const { _id, title, author, book_image, description, buy_links } = bookById;

  // Filter buy links to include only 'Amazon' and 'Apple Books'
  const filteredBuyLinks = buy_links.filter(link => ['Amazon', 'Apple Books'].includes(link.name));

  const placeholderImageURL = new URL('/src/images/placeholder.jpg', import.meta.url).href;

  // Generate HTML markup for buy links
  const buyLinksMarkup = filteredBuyLinks
    .map(link => `<a href="${link.url}" target="_blank"></a>`)
    .join('');

  // Generate modal HTML markup
  const markup = `
    <div class="modal" data-book-id="${_id}">
      <img class="lazyload" 
      src="${placeholderImageURL}"
      data-src="${book_image}" alt="${title}">
      <div class="modal__details">
          <p class="modal__details-title">${title}</p>
          <p class="modal__details-author">${author}</p>
          <p class="modal__details-description">${
            description ? description : 'Sorry, the description for this book is not available.'
          }</p>
          <div class="modal__details-links">${buyLinksMarkup}</div>
      </div>
    </div>
    <button type = "button" class = "modal-pop-up-btn button" data-book-id = "${_id}">Add to shopping list</button>
  `;

  // Insert the modal markup into the modal container
  modalContainer.innerHTML = markup;

  // Adding event handling for the "Add to Shopping List" buttons
  const addToShoppingListButtons = document.querySelectorAll('.modal-pop-up-btn');
  addToShoppingListButtons.forEach(function (button) {
    // Adding click event listener with asynchronous function
    button.addEventListener('click', async function () {
      // Retrieving bookId from the data-book-id attribute
      const bookId = button.getAttribute('data-book-id');

      // Calling the function to add the book to localStorage
      await addToLocalStorage(bookId);
    });
  });
};
