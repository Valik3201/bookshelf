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

  // Generate HTML markup for buy links
  const buyLinksMarkup = filteredBuyLinks
    .map(link => `<p>${link.name}: <a href="${link.url}" target="_blank">${link.url}</a></p>`)
    .join('');

  // Generate modal HTML markup
  const markup = `
    <div class="modal" data-book-id="${_id}">
      <img class="lazyload" 
      src="/src/images/ph-desktop.png"
      srcset= "/src/images/ph-mobile2.png 150w,
       /src/images/ph-mobile.png 300w, 
       /src/images/ph-tablet.png 600w,
       /src/images/ph-desktop 1200w"
      data-src="${book_image}" alt="${title}">
      <div class="modal__details">
          <p class="modal__details-title">Title: ${title}</p>
          <p class="modal__details-author">Author: ${author}</p>
          <p class="modal__details-description">Description: ${description}</p>
          <p class="modal__details-links">Buy Links: ${buyLinksMarkup}</p>
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
