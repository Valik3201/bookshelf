// Funkcja pokazująca obrazek i komunikat
function showBooksImgAndMessage() {
  // Pobierz referencję do obrazka .books-img
  const booksImg = document.querySelector('.books-img');

  // Pobierz referencję do diva .book-message
  const emptyMessage = document.querySelector('.book-message');

  // Sprawdź, czy obrazek i komunikat istnieją
  if (booksImg && emptyMessage) {
    booksImg.style.visibility = 'visible';
    emptyMessage.style.visibility = 'visible';
  }
}

// Funkcja obsługująca kliknięcie przycisku usuwania
function deleteBookCard() {
  // Pobierz referencję do diva .book-card
  const bookCard = document.querySelector('.book-card');

  // Sprawdź, czy div .book-card istnieje
  if (bookCard) {
    // Usuń div .book-card
    bookCard.remove();
    // Po usunięciu karty, pokaż obrazek i komunikat
    showBooksImgAndMessage();
  } else {
    console.warn('Div .book-card do usunięcia nie istnieje.');
  }
}

// Pobierz wszystkie przyciski .button-delete i dodaj nasłuchiwanie na kliknięcie
const deleteButtons = document.querySelectorAll('.button-delete');
deleteButtons.forEach(function (button) {
  button.addEventListener('click', deleteBookCard);
});

// Sprawdź stan kart po załadowaniu strony
document.addEventListener('DOMContentLoaded', function () {
  // Ukryj obrazek i komunikat na początku
  hideBooksImgAndMessage();
});

// Funkcja ukrywająca obrazek i komunikat
function hideBooksImgAndMessage() {
  // Pobierz referencję do obrazka .books-img
  const booksImg = document.querySelector('.books-img');

  // Pobierz referencję do diva .book-message
  const emptyMessage = document.querySelector('.book-message');

  // Sprawdź, czy obrazek i komunikat istnieją
  if (booksImg && emptyMessage) {
    booksImg.style.visibility = 'hidden';
    emptyMessage.style.visibility = 'hidden';
  }
}

// Funkcja sprawdzająca czy karta książki istnieje
function checkBookCardExistence() {
  // Pobierz referencję do diva .book-card
  const bookCard = document.querySelector('.book-card');

  // Pobierz referencję do diva, który zawiera komunikat
  const emptyMessage = document.querySelector('.book-message');

  // Sprawdź, czy div .book-card istnieje
  if (bookCard) {
    // Jeśli karta istnieje, ukryj komunikat
    if (emptyMessage) {
      emptyMessage.style.visibility = 'hidden';
    }
  } else {
    // Jeśli karta nie istnieje, pokaż komunikat
    if (emptyMessage) {
      emptyMessage.style.visibility = 'visible';
    }
  }
}

// Sprawdź stan kart po załadowaniu strony
document.addEventListener('DOMContentLoaded', checkBookCardExistence);
