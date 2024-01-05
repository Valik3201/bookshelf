import { fetchBooks } from './bookAPI.js';
import {
  addToLocalStorage,
  removeFromLocalStorage,
  checkIfBookInLocalStorage,
  showCongratulatoryMessage,
  hideCongratulatoryMessage,
} from './localStorage.js';
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
  const buyLinks = [
    {
      name: 'Amazon',
      imageUrl: new URL('/src/images/amazon.png', import.meta.url).href,
      buyUrl: '',
    },
    {
      name: 'Apple Books',
      imageUrl: new URL('/src/images/apple.png', import.meta.url).href,
      buyUrl: '',
    },
  ];

  const filteredBuyLinks = buy_links.filter(link =>
    buyLinks.some(store => store.name === link.name),
  );

  buyLinks.forEach(store => {
    const link = filteredBuyLinks.find(filteredLink => filteredLink.name === store.name);
    store.buyUrl = link ? link.url : '';
  });

  // Generate HTML markup for buy links
  const buyLinksMarkup = buyLinks
    .map(
      store =>
        `<a href="${store.buyUrl}" target="_blank"><img src="${store.imageUrl}" alt="${store.name}"></a>`,
    )
    .join('');

  const placeholderImageURL = new URL('/src/images/placeholder.jpg', import.meta.url).href;

  // Generate modal HTML markup
  const markup = `
    <div class="modal">
      <div class="modal__info">
        <div class="modal__cover">
        <img class="lazyload" src="${placeholderImageURL}" data-src="${book_image}" alt="${title}">
        </div>
        <div class="modal__details">
            <div class="modal__details-header">
              <p class="modal__details-title">${title}</p>
              <p class="modal__details-author">${author}</p>
            </div>
            <p class="modal__details-description">${
              description ? description : 'Sorry, the description for this book is not available.'
            }</p>
            <div class="modal__details-links">${buyLinksMarkup}</div>
        </div>
      </div>
    </div>
    <button type = "button" class = "modal-pop-up-btn button" data-book-id = "${_id}">Add to shopping list</button>
  `;

  // Insert the modal markup into the modal container
  modalContainer.innerHTML = markup;

  // Adding event handling for the "Add to Shopping List" buttons
  const addToShoppingListButtons = document.querySelectorAll('.modal-pop-up-btn');
  addToShoppingListButtons.forEach(function (button) {
    const bookId = button.getAttribute('data-book-id');

    // Checking if the book is already in localStorage
    const isBookInLocalStorage = checkIfBookInLocalStorage(bookId);

    if (isBookInLocalStorage) {
      // If the book is in localStorage, change the button text
      button.textContent = 'Remove from the shopping list';
      // Add the congratulatory message
      showCongratulatoryMessage();
    } else {
      // If the book is not in localStorage, add it and change the button text
      hideCongratulatoryMessage();
    }

    // Adding click event listener with  function
    button.addEventListener('click', function () {
      // Checking if the book is already in localStorage
      const isBookInLocalStorage = checkIfBookInLocalStorage(bookId);

      if (isBookInLocalStorage) {
        // If the book is in localStorage, remove it and change the button text
        removeFromLocalStorage(bookId);
        button.textContent = 'Add to shopping list';
        // Remove the congratulatory message
        hideCongratulatoryMessage();
      } else {
        // If the book is not in localStorage, add it and change the button text
        addToLocalStorage(bookId);
        button.textContent = 'Remove from the shopping list';
        // Add the congratulatory message
        showCongratulatoryMessage();
      }
    });
  });
};
