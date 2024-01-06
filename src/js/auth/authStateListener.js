import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase.js';

import {
  logOutButton,
  handleLogout,
  signUpButtons,
  userProfile,
  userButton,
  userNavList,
  userProfileMobile,
  userNameDisplayMobile,
} from '../auth.js';

export const onAuthStateChangedListener = userNameDisplay => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const displayName = user.displayName;

      userNameDisplay.textContent = displayName;
      userNameDisplayMobile.textContent = displayName;

      userButton.classList.remove('hidden');
      userProfileMobile.classList.remove('hidden');
      signUpButtons.forEach(function (button) {
        button.classList.add('hidden');
      });
      userNavList.classList.remove('hidden');

      logOutButton.addEventListener('click', handleLogout);
    } else {
      userNameDisplay.textContent = '';
      userButton.classList.add('hidden');
      userProfileMobile.classList.add('hidden');
      signUpButtons.forEach(function (button) {
        button.classList.remove('hidden');
      });
      userNavList.classList.add('hidden');
    }
  });
};
