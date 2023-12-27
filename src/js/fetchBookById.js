import { fetchBooks } from './bookAPI.js';

/**
 * Display book details by ID in a modal pop-up.
 * @param {string} bookId - The ID of the book to display.
 * @returns {void}
 */
export const displayBookById = async bookId => {
  // Find the modal container in the DOM
  const modalContainer = document.querySelector('.modal-pop-up-content');

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
      <img class="modal__image" src="${book_image}" alt="${title}">
      <div class="modal__details">
          <p class="modal__details-title">Title: ${title}</p>
          <p class="modal__details-author">Author: ${author}</p>
          <p class="modal__details-description">Description: ${description}</p>
          <p class="modal__details-links">Buy Links: ${buyLinksMarkup}</p>
      </div>
    </div>
  `;

  // Insert the modal markup into the modal container
  modalContainer.insertAdjacentHTML('beforeend', markup);
};
