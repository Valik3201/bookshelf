// DOM elements for mobile menu
const openMenuButton = document.querySelector('.hamburger-button');
const closeMenuButton = document.querySelector('.close-button');
const mobileMenuSingUp = document.querySelector('#sing-up-mobile-menu');

// Add a class to close menu button initially
closeMenuButton.classList.add('mobile-menu-close');

/**
 * Open the mobile menu by translating it horizontally.
 */
const openMenu = () => {
  // Delay the menu animation for 500 milliseconds
  setTimeout(() => {
    // Translate the mobile menu to the open position
    mobileMenuSingUp.style.transform = 'translateX(0)';

    // Adjust classes for open and close buttons for visual changes
    closeMenuButton.classList.remove('mobile-menu-close');
    closeMenuButton.classList.add('mobile-menu-open');
    openMenuButton.classList.remove('mobile-menu-open');
    openMenuButton.classList.add('mobile-menu-close');
  }, 500);
};

/**
 * Close the mobile menu by translating it horizontally.
 */
const closeMenu = () => {
  // Delay the menu animation for 500 milliseconds
  setTimeout(() => {
    // Translate the mobile menu to the closed position
    mobileMenuSingUp.style.transform = 'translateX(-100%)';

    // Adjust classes for open and close buttons for visual changes
    closeMenuButton.classList.remove('mobile-menu-open');
    closeMenuButton.classList.add('mobile-menu-close');
    openMenuButton.classList.remove('mobile-menu-close');
    openMenuButton.classList.add('mobile-menu-open');
  }, 500);
};

// Event listeners for mobile menu buttons
openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
