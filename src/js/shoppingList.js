// Funkcja wyświetlająca dane z local storage na karcie
const displayBookFromLocalStorage = () => {
  // Pobierz dane z local storage
  const selectedBookData = JSON.parse(localStorage.getItem('selectedBook'));

  // Pobierz referencję do diva .book-card
  const bookCard = document.querySelector('.book-card');

  // Sprawdź, czy div .book-card istnieje
  if (bookCard) {
    // Sprawdź, czy są dane w local storage
    if (selectedBookData) {
      // Zaktualizuj treść elementów w .book-card
      const booksCardImg = bookCard.querySelector('.books-card-img');
      const bookTitle = bookCard.querySelector('.book-title');
      const bookGenre = bookCard.querySelector('.book-genre');
      const bookPlot = bookCard.querySelector('.book-plot');
      const bookAuthor = bookCard.querySelector('.book-author');

      booksCardImg.src = selectedBookData.book_image;
      booksCardImg.alt = selectedBookData.title;
      bookTitle.textContent = selectedBookData.title;
      bookGenre.textContent = selectedBookData.genre;
      bookPlot.textContent = selectedBookData.plot;
      bookAuthor.textContent = selectedBookData.author;
    } else {
      // Jeśli brak danych w local storage, wyświetl komunikat
      console.warn('Brak danych o książce w local storage.');
    }
  } else {
    console.warn('Div .book-card nie istnieje.');
  }
};

// Pobierz i wyświetl dane z local storage po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
  // Wyświetl dane na karcie
  displayBookFromLocalStorage();
  // Sprawdź stan kart, ale nie pokazuj komunikatu
  checkBookCardExistence(false);
});

// Pobierz wszystkie przyciski .button-delete i dodaj nasłuchiwanie na kliknięcie
const deleteButtons = document.querySelectorAll('.button-delete');
deleteButtons.forEach(button => {
  button.addEventListener('click', deleteBookCard);
});

// Funkcja obsługująca kliknięcie przycisku usuwania
function deleteBookCard() {
  // Usuń dane z local storage
  localStorage.removeItem('selectedBook');

  // Pobierz referencję do diva .book-card
  const bookCard = document.querySelector('.book-card');

  // Sprawdź, czy div .book-card istnieje
  if (bookCard) {
    // Usuń div .book-card
    bookCard.remove();
    // Po usunięciu karty, sprawdź stan kart
    checkBookCardExistence(true); // Przekazujemy wartość true, aby pokazać komunikat
  } else {
    console.warn('Div .book-card do usunięcia nie istnieje.');
  }
}

// Funkcja sprawdzająca czy karta książki istnieje
function checkBookCardExistence(showMessage) {
  // Pobierz referencję do diva .book-card
  const bookCard = document.querySelector('.book-card');

  // Pobierz referencję do diva, który zawiera komunikat
  const emptyMessage = document.querySelector('.book-message');

  // Sprawdź, czy div .book-card istnieje
  if (bookCard) {
    // Sprawdź, czy komunikat istnieje i usuń go
    if (emptyMessage) {
      emptyMessage.remove();
    }
  } else {
    // Sprawdź, czy komunikat nie istnieje i dodaj go
    if (!emptyMessage && showMessage) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'book-message';
      messageDiv.textContent = 'This page is empty, add some books and proceed to order.';
      document.body.appendChild(messageDiv);
    }
  }
}
