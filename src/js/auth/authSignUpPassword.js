import { auth } from './firebase.js';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Notify } from '../notiflixConfig.js';

/**
 * Create a new user account with the provided email and password using Firebase authentication.
 *
 * @param {string} email - The email address for the new user.
 * @param {string} password - The password for the new user.
 * @returns {Promise<object>} - A promise that resolves to the newly created user object upon successful account creation.
 * @throws {Error} - Throws an error if the account creation process fails.
 */
export const createUser = async (email, password) => {
  try {
    // Attempt to create a new user account with Firebase authentication
    const user = await createUserWithEmailAndPassword(auth, email, password);

    // If the user is created and has a display name, show a success notification
    if (user && user.displayName) {
      Notify.success(`Welcome, ${user.displayName}!`);
    }

    // Return the newly created user object
    return user;
  } catch (error) {
    // Handle different authentication errors and show appropriate notifications
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/email-already-in-use') {
      Notify.failure('Email is already in use.');
    } else if (errorCode === 'auth/invalid-email') {
      Notify.failure('Invalid email address.');
    } else {
      Notify.failure(`Error: ${errorCode} - ${errorMessage}`);
    }

    // Re-throw the error after handling it
    throw error;
  }
};
