// Importing the userProfile element from the auth module
import { userProfile } from './auth.js';
// Importing onAuthStateChanged function and auth object from Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './auth/firebase';

/**
 * Check the screen width and adjust the visibility of the userProfile element accordingly.
 */
const checkScreenWidth = () => {
  // Get the current screen width
  const screenWidth = window.innerWidth;

  // If the screen width is less than 768 pixels, hide the userProfile element
  if (screenWidth < 768) {
    userProfile.classList.add('hidden');
  } else {
    // If the screen width is 768 pixels or more, check the user authentication state
    onAuthStateChanged(auth, user => {
      if (user) {
        // If a user is authenticated, show the userProfile element
        userProfile.classList.remove('hidden');
      } else {
        // If no user is authenticated, hide the userProfile element
        userProfile.classList.add('hidden');
      }
    });
  }
};

// Initial check of screen width when the script runs
checkScreenWidth();

// Add a resize event listener to dynamically check screen width changes
window.addEventListener('resize', checkScreenWidth);
