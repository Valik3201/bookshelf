import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './auth/firebase';

const openMenuButton = document.querySelector('.open-mobile-menu');
const closeMenuButton = document.querySelector('#close-sing-up-mobile-menu');
const windowSize = window.matchMedia('(min-width: 768px)');
const mobileMenuSingUp = document.querySelector('#sing-up-mobile-menu');

const openMenu = () => {
  mobileMenuSingUp.style.display = 'block';
  setTimeout(() => {
    mobileMenuSingUp.style.transform = 'translateX(0)';
  }, 1);
};

const closeMenu = () => {
  mobileMenuSingUp.style.transform = 'translateX(-100%)';
  setTimeout(() => {
    mobileMenuSingUp.style.transform = 'translateX(-100%)';
  }, 500);
};

//closing mobile menu function if window size is bigger than 768px
function mobileMenuClose(event) {
  if (event.matches) {
    mobileMenuSingUp.style.display = 'none';
  }
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
windowSize.addEventListener('change', mobileMenuClose);
