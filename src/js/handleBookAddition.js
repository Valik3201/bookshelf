import {
  addToLocalStorage,
  removeFromLocalStorage,
  checkIfBookInLocalStorage,
  toggleCongratulatoryMessage,
} from './localStorage.js';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './auth/firebase';

export const bookAddButtonHandler = () => {
  // Adding event handling for the "Add to Shopping List" buttons
  const addToShoppingListButtons = document.querySelectorAll('.modal-pop-up-btn');

  onAuthStateChanged(auth, user => {
    if (user) {
      addToShoppingListButtons.forEach(function (button) {
        const bookId = button.getAttribute('data-book-id');

        // Checking if the book is already in localStorage
        const isBookInLocalStorage = checkIfBookInLocalStorage(bookId);

        if (isBookInLocalStorage) {
          // If the book is in localStorage, change the button text
          button.textContent = 'Remove from the shopping list';
          // Add the congratulatory message
          toggleCongratulatoryMessage(true);
        } else {
          // If the book is not in localStorage, add it and change the button text
          toggleCongratulatoryMessage(false);
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
            toggleCongratulatoryMessage(false);
          } else {
            // If the book is not in localStorage, add it and change the button text
            addToLocalStorage(bookId);
            button.textContent = 'Remove from the shopping list';
            // Add the congratulatory message
            toggleCongratulatoryMessage(true);
          }
        });
      });
    } else {
      toggleCongratulatoryMessage(false);

      document.querySelector('.auth-message').style.display = 'block';

      addToShoppingListButtons.forEach(function (button) {
        button.id = 'not-allowed';
      });
    }
  });
};
