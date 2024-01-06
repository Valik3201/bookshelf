import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './auth/firebase';

const openMenuButton = document.querySelector('.hamburger-icon');
const closeMenuButton = document.querySelector('.close-button-icon');

const mobileMenuSingUp = document.querySelector('#sing-up-mobile-menu');

const openMenu = () => {
  mobileMenuSingUp.style.display = 'block';
  setTimeout(() => {
    mobileMenuSingUp.style.transform = 'translateX(0)';

    closeMenuButton.style.display = 'block';
    openMenuButton.style.display = 'none';
  }, 1);
};

const closeMenu = () => {
  mobileMenuSingUp.style.transform = 'translateX(-100%)';
  setTimeout(() => {
    mobileMenuSingUp.style.transform = 'translateX(-100%)';

    closeMenuButton.style.display = 'none';
    openMenuButton.style.display = 'block';
  }, 500);
};

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
