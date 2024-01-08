/**
 * DOM element representing the container for the content inside the popup modal.
 * @type {HTMLElement}
 */
export const modalContainer = document.querySelector('.modal-pop-up-content');

/**
 * Function to toggle the visibility of the popup modal.
 * @param {boolean} showModal - If true, show the modal; if false, hide the modal.
 */
export const toggleModal = showModal => {
  /**
   * DOM element representing the backdrop of the popup modal.
   * @type {HTMLElement}
   */
  const backdrop = document.querySelector('.backdrop-pop-up');

  if (showModal) {
    // Show the modal by removing the 'is-hidden' class from the backdrop
    backdrop.classList.remove('is-hidden');
  } else {
    // Hide the modal by adding the 'is-hidden' class to the backdrop
    backdrop.classList.add('is-hidden');
  }
};

/**
 * DOM element representing the backdrop of the popup modal.
 * @type {HTMLElement}
 */
const backdrop = document.querySelector('.backdrop-pop-up');

/**
 * Event listener for clicking on the modal backdrop. Closes the modal.
 */
backdrop.addEventListener('click', function (event) {
  // Check if the click occurred on the backdrop (not its children)
  if (event.target === backdrop) {
    // Close the modal only if the click occurred directly on the backdrop
    toggleModal(false);
  }
});

/**
 * DOM element representing the close button inside the modal.
 * @type {HTMLElement}
 */
const closeButton = document.querySelector('.close-modal-button');

/**
 * Event listener for clicking on the close button. Clears the modal content and hides it.
 */
closeButton.addEventListener('click', function () {
  // Clear the content inside the modal container
  modalContainer.innerHTML = '';

  // Hide the modal
  toggleModal(false);
});

// Closing with keyboard keys

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    toggleModal(false);
  }
});
