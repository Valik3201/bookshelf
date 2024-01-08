// DOM element representing the scroll-up button
const scrollUpBtn = document.querySelector('#scrollUp');

/**
 * Show or hide the scroll-up button based on the scroll position.
 */
const showScrollUpButton = () => {
  // Check if the scroll position is greater than 500 pixels
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // Add the 'on' class to display the scroll-up button
    scrollUpBtn.classList.add('on');
  } else {
    // Remove the 'on' class to hide the scroll-up button
    scrollUpBtn.classList.remove('on');
  }
};

/**
 * Scroll to the top of the page with a smooth behavior.
 */
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * Handle the scroll event by updating the visibility of the scroll-up button.
 */
const handleScroll = () => {
  showScrollUpButton();
};

// Add a scroll event listener to trigger the handleScroll function
window.addEventListener('scroll', handleScroll);

// Add a click event listener to the scroll-up button to trigger the scrollUp function
scrollUpBtn.addEventListener('click', scrollUp);
