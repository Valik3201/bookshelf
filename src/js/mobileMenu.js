const openMenuButton = document.querySelector('.open-mobile-menu');
const closeMenuButton = document.querySelector('.close-button');
const mobileMenuField = document.querySelector('.mobile-menu-field');

const openMenu = () => {
  mobileMenuField.style.display = 'block';
  setTimeout(() => {
    mobileMenuField.style.transform = 'translateX(0)';
  }, 1);
};

const closeMenu = () => {
  mobileMenuField.style.transform = 'translateX(-100%)';

  // Po zakończeniu animacji ustaw display na none
  setTimeout(() => {
    mobileMenuField.style.display = 'none';
  }, 500); // Czas trwania animacji (500ms w tym przypadku)
};

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
