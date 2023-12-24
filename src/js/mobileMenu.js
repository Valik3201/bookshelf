const openMenuButton = document.querySelector('.open-mobile-menu');
const closeMenuButton = document.querySelector('.close-button');
const mobileMenuField = document.querySelector('.mobile-menu-field');

const openMenu = () => {
  mobileMenuField.style.display = 'block';
};

const closeMenu = () => {
  mobileMenuField.style.display = 'none';
};

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
