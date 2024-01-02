import { auth } from './firebase.js';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const createUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    console.log('User signed up:', user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/email-already-in-use') {
      console.error('Email is already in use.');
    } else if (errorCode === 'auth/invalid-email') {
      console.error('Invalid email address.');
    } else {
      console.error(`Error: ${errorCode} - ${errorMessage}`);
    }
    throw error;
  }
};
