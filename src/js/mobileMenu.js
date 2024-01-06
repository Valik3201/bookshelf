import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './auth/firebase';

const openMenuButton = document.querySelector('.hamburger-button');
const closeMenuButton = document.querySelector('.close-button');

const mobileMenuSingUp = document.querySelector('#sing-up-mobile-menu');

closeMenuButton.classList.add('mobile-menu-close');

const openMenu = () => {
  setTimeout(() => {
    mobileMenuSingUp.style.transform = 'translateX(0)';

    closeMenuButton.classList.remove('mobile-menu-close');
    closeMenuButton.classList.add('mobile-menu-open');
    openMenuButton.classList.remove('mobile-menu-open');
    openMenuButton.classList.add('mobile-menu-close');
  }, 1);
};

const closeMenu = () => {
  mobileMenuSingUp.style.transform = 'translateX(-100%)';
  setTimeout(() => {
    mobileMenuSingUp.style.transform = 'translateX(-100%)';

    closeMenuButton.classList.remove('mobile-menu-open');
    closeMenuButton.classList.add('mobile-menu-close');
    openMenuButton.classList.remove('mobile-menu-close');
    openMenuButton.classList.add('mobile-menu-open');
  }, 500);
};

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
