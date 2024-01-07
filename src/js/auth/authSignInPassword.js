import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase.js';

import { Notify } from '../notiflixConfig.js';

/**
 * Sign in a user with the provided email and password using Firebase authentication.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<object>} - A promise that resolves to the user object upon successful sign-in.
 * @throws {Error} - Throws an error if the sign-in process fails.
 */
export const signInUser = async (email, password) => {
  try {
    // Attempt to sign in the user with Firebase authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // If the user is signed in and has a display name, show a success notification
    if (user && user.displayName) {
      Notify.success(`Welcome back, ${user.displayName}!`);
    }

    // Return the user object
    return user;
  } catch (error) {
    // Handle different authentication errors and show appropriate notifications
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/user-not-found') {
      Notify.failure('User not found. Please check your email and password.');
    } else if (errorCode === 'auth/wrong-password') {
      Notify.failure('Invalid password. Please check your email and password.');
    } else if (errorCode === 'auth/invalid-email') {
      Notify.failure('Invalid email address.');
    } else {
      Notify.failure(`Error: ${errorCode} - ${errorMessage}`);
    }

    // Re-throw the error after handling it
    throw error;
  }
};
