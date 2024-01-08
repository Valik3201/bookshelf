// Importing functions from localStorage module for managing local storage
import {
  addToLocalStorage,
  removeFromLocalStorage,
  checkIfBookInLocalStorage,
  toggleCongratulatoryMessage,
} from '../shoppingList/localStorage.js';

// Importing onAuthStateChanged function and auth object from Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase.js';

/**
 * Handle the click events for the "Add to Shopping List" buttons.
 */
export const bookAddButtonHandler = () => {
  // Selecting all buttons with class 'modal-pop-up-btn'
  const addToShoppingListButtons = document.querySelectorAll('.modal-pop-up-btn');

  // Checking the authentication state when the page loads
  onAuthStateChanged(auth, user => {
    if (user) {
      // If the user is authenticated
      addToShoppingListButtons.forEach(function (button) {
        const bookId = button.getAttribute('data-book-id');

        // Checking if the book is already in localStorage
        const isBookInLocalStorage = checkIfBookInLocalStorage(bookId);

        if (isBookInLocalStorage) {
          // If the book is in localStorage, change the button text and show congratulatory message
          button.textContent = 'Remove from the shopping list';
          toggleCongratulatoryMessage(true);
        } else {
          // If the book is not in localStorage, hide the congratulatory message
          toggleCongratulatoryMessage(false);
        }

        // Adding click event listener to the button
        button.addEventListener('click', function () {
          // Checking if the book is already in localStorage
          const isBookInLocalStorage = checkIfBookInLocalStorage(bookId);

          if (isBookInLocalStorage) {
            // If the book is in localStorage, remove it and change the button text
            removeFromLocalStorage(bookId);
            button.textContent = 'Add to shopping list';
            // Hide the congratulatory message
            toggleCongratulatoryMessage(false);
          } else {
            // If the book is not in localStorage, add it and change the button text
            addToLocalStorage(bookId);
            button.textContent = 'Remove from the shopping list';
            // Show the congratulatory message
            toggleCongratulatoryMessage(true);
          }
        });
      });
    } else {
      // If the user is not authenticated
      toggleCongratulatoryMessage(false);

      // Show authentication message
      document.querySelector('.auth-message').style.display = 'block';

      // Disable the buttons and visually indicate it
      addToShoppingListButtons.forEach(function (button) {
        button.id = 'not-allowed';
      });
    }
  });
};
