const openMenuButton = document.querySelector('.open-mobile-menu');
const closeMenuButton = document.querySelector('.close-button');
const mobileMenuField = document.querySelector('.mobile-menu-field');
const windowSize = window.matchMedia('(min-width: 768px)');

const openMenu = () => {
  mobileMenuField.style.display = 'block';
  setTimeout(() => {
    mobileMenuField.style.transform = 'translateY(0)';
  }, 1);
};

const closeMenu = () => {
  mobileMenuField.style.transform = 'translateY(-100%)';

  setTimeout(() => {
    mobileMenuField.style.display = 'none';
  }, 500);
};

function mobileMenuClose(event) {
  if (event.matches) {
    mobileMenuField.style.display = 'none';
  }
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
windowSize.addEventListener('change', mobileMenuClose);
