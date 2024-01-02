import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase.js';

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/user-not-found') {
      console.error('User not found. Please check your email and password.');
    } else if (errorCode === 'auth/wrong-password') {
      console.error('Invalid password. Please check your email and password.');
    } else if (errorCode === 'auth/invalid-email') {
      console.error('Invalid email address.');
    } else {
      console.error(`Error: ${errorCode} - ${errorMessage}`);
    }
    throw error;
  }
};
