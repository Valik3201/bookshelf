import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase.js';

import {
  logOutButton,
  handleLogout,
  signUpButtons,
  userButton,
  userNavList,
  userProfileMobile,
  userNameDisplayMobile,
} from '../auth.js';

/**
 * Listener function for the 'onAuthStateChanged' event in Firebase.
 *
 * @param {HTMLElement} userNameDisplay - The HTML element to display the user's name.
 */
export const onAuthStateChangedListener = userNameDisplay => {
  // Attach a callback function to the 'onAuthStateChanged' event
  onAuthStateChanged(auth, user => {
    if (user) {
      // If a user is authenticated
      const displayName = user.displayName;

      // Update the user's name display in the specified HTML element
      userNameDisplay.textContent = displayName;
      userNameDisplayMobile.textContent = displayName;

      // Show user-related elements and hide sign-up buttons
      userButton.classList.remove('hidden');
      userProfileMobile.classList.remove('hidden');
      signUpButtons.forEach(function (button) {
        button.classList.add('hidden');
      });

      // Show the user navigation list and attach a logout event listener
      userNavList.classList.remove('hidden');
      logOutButton.addEventListener('click', handleLogout);
    } else {
      // If no user is authenticated
      userNameDisplay.textContent = '';

      // Hide user-related elements and show sign-up buttons
      userButton.classList.add('hidden');
      userProfileMobile.classList.add('hidden');
      signUpButtons.forEach(function (button) {
        button.classList.remove('hidden');
      });

      // Hide the user navigation list
      userNavList.classList.add('hidden');
    }
  });
};
