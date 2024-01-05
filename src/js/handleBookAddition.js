import {
  addToLocalStorage,
  removeFromLocalStorage,
  checkIfBookInLocalStorage,
  showCongratulatoryMessage,
  hideCongratulatoryMessage,
} from './localStorage.js';

export const bookAddButtonHandler = () => {
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
