/**
 * Element DOM reprezentujący kontener na treść wewnątrz wyskakującego okna modalnego.
 * @type {HTMLElement}
 */
export const modalContainer = document.querySelector('.modal-pop-up-content');

/**
 * Funkcja do przełączania widoczności wyskakującego okna modalnego.
 * @param {boolean} showModal - Jeśli wartość to true, pokaż okno modalne; jeśli false, ukryj okno modalne.
 */
export const toggleModal = showModal => {
  /**
   * Element DOM reprezentujący tło wyskakującego okna modalnego.
   * @type {HTMLElement}
   */
  const backdrop = document.querySelector('.backdrop-pop-up');

  if (showModal) {
    // Pokaż okno modalne, usuwając klasę 'is-hidden' z tła
    backdrop.classList.remove('is-hidden');
  } else {
    // Ukryj okno modalne, dodając klasę 'is-hidden' do tła
    backdrop.classList.add('is-hidden');
  }
};

/**
 * Element DOM reprezentujący przycisk zamykający wewnątrz modala.
 * @type {HTMLElement}
 */
const closeButton = document.querySelector('.close-modal-button');

/**
 * Słuchacz zdarzeń dla kliknięcia na przycisk zamykający. Czyści zawartość modala i ukrywa go.
 */
closeButton.addEventListener('click', function () {
  // Wyczyść zawartość wewnątrz kontenera modala
  modalContainer.innerHTML = '';

  // Ukryj modal
  toggleModal(false);
});
//zamknięcie za pomocą klawiszy

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    toggleModal(false);
  }
});


