import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase.js';

import {
  logOutButton,
  handleLogout,
  signUpButtons,
  userProfile,
  userButton,
  userNavList,
} from '../auth.js';

export const onAuthStateChangedListener = userNameDisplay => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const displayName = user.displayName;

      userNameDisplay.textContent = displayName;
      userProfile.classList.remove('hidden');
      userButton.classList.remove('hidden');
      signUpButtons.classList.add('hidden');
      userNavList.classList.remove('hidden');

      logOutButton.addEventListener('click', handleLogout);
    } else {
      userNameDisplay.textContent = '';
      userProfile.classList.add('hidden');
      userButton.classList.add('hidden');
      signUpButtons.classList.remove('hidden');
      userNavList.classList.add('hidden');
    }
  });
};
