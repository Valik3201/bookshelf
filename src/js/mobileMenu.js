import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './auth/firebase';

const openMenuButton = document.querySelector('.open-mobile-menu');
const closeMenuButton = document.querySelector('.close-button');
const windowSize = window.matchMedia('(min-width: 768px)');

const mobileMenuSingIn = document.querySelector('#sing-in-mobile-menu');
const mobileMenuSingUp = document.querySelector('#sing-up-mobile-menu');

const openMenu = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      mobileMenuSingIn.style.display = 'block';
      setTimeout(() => {
        mobileMenuSingIn.style.transform = 'translateX(0)';
      }, 1);
    } else {
      mobileMenuSingUp.style.display = 'block';
      setTimeout(() => {
        mobileMenuSingUp.style.transform = 'translateX(0)';
      }, 1);
    }
  });
};

const closeMenu = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      mobileMenuSingIn.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        mobileMenuSingIn.style.display = 'none';
      }, 500);
    } else {
      mobileMenuSingIn.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        mobileMenuSingUp.style.transform = 'translateX(-100%)';
      }, 500);
    }
  });
};

//closing mobile menu function if window size is bigger than 768px
function mobileMenuClose(event) {
  if (event.matches) {
    mobileMenuSingIn.style.display = 'none';
    mobileMenuSingUp.style.display = 'none';
  }
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
windowSize.addEventListener('change', mobileMenuClose);
