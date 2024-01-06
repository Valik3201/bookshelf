import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase.js';

import {
  logOutButton,
  handleLogout,
  signUpButton,
  userProfile,
  userButton,
  userNavList,
} from '../auth.js';

export const onAuthStateChangedListener = userNameDisplay => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const displayName = user.displayName;

      const userNameDisplayMobile = document.querySelector('#user-name-display-mobile');

      userNameDisplay.textContent = displayName;
      userNameDisplayMobile.textContent = displayName;
      userProfile.classList.remove('hidden');
      userButton.classList.remove('hidden');
      signUpButton.classList.add('hidden');
      userNavList.classList.remove('hidden');

      logOutButton.addEventListener('click', handleLogout);
    } else {
      userNameDisplay.textContent = '';
      userProfile.classList.add('hidden');
      userButton.classList.add('hidden');
      signUpButton.classList.remove('hidden');
      userNavList.classList.add('hidden');
    }
  });
};
