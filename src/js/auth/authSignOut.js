import { signOut } from 'firebase/auth';

import { auth } from './firebase.js';

import { Notify } from '../notiflixConfig.js';

export const signOutUser = async () => {
  try {
    await signOut(auth);

    window.location.href = '/index.html';

    Notify.success('User successfully signed out. Come back soon!');
  } catch (error) {
    Notify.failure(`Error signing out: ${error.message}`);
  }
};
