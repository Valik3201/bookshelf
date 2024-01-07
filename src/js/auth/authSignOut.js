import { signOut } from 'firebase/auth';

import { auth } from './firebase.js';

import { Notify } from '../notiflixConfig.js';

/**
 * Sign out the currently authenticated user using Firebase authentication.
 *
 * @returns {Promise<void>} - A promise that resolves when the user is successfully signed out.
 * @throws {Error} - Throws an error if the sign-out process fails.
 */
export const signOutUser = async () => {
  try {
    // Attempt to sign out the user using Firebase authentication
    await signOut(auth);

    // Redirect the user to the home page after successful sign-out
    window.location.href = '/index.html';

    // Show a success notification after sign-out
    Notify.success('User successfully signed out. Come back soon!');
  } catch (error) {
    // Show a failure notification if there is an error during sign-out
    Notify.failure(`Error signing out: ${error.message}`);

    // Re-throw the error after handling it
    throw error;
  }
};
