import { auth } from './firebase.js';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Notify } from '../notiflixConfig.js';

export const createUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    if (user && user.displayName) {
      Notify.success(`Welcome, ${user.displayName}!`);
    }

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/email-already-in-use') {
      Notify.failure('Email is already in use.');
    } else if (errorCode === 'auth/invalid-email') {
      Notify.failure('Invalid email address.');
    } else {
      Notify.failure(`Error: ${errorCode} - ${errorMessage}`);
    }
    throw error;
  }
};
