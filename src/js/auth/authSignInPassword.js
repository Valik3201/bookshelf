import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase.js';

import { Notify } from '../notiflixConfig.js';

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user && user.displayName) {
      Notify.success(`Welcome back, ${user.displayName}!`);
    }

    return user;
  } catch (error) {
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
    throw error;
  }
};
