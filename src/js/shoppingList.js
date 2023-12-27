import { fetchBooks } from './bookAPI.js';

// Funkcja wyświetlająca dane z API na karcie
const displayBooksFromAPI = bookData => {
  // Pobierz referencję do diva .book-card
  const bookCard = document.querySelector('.book-card');

  // Sprawdź, czy div .book-card istnieje
  if (bookCard) {
    // Sprawdź, czy są dane z API
    if (bookData) {
      // Zaktualizuj treść elementów w .book-card
      const booksCardImg = bookCard.querySelector('.books-card-img');
      const bookTitle = bookCard.querySelector('.book-title');
      const bookGenre = bookCard.querySelector('.book-genre');
      const bookPlot = bookCard.querySelector('.book-plot');
      const bookAuthor = bookCard.querySelector('.book-author');

      booksCardImg.src = bookData.book_image;
      booksCardImg.alt = bookData.title;
      bookTitle.textContent = bookData.title;
      bookGenre.textContent = bookData.genre;
      bookPlot.textContent = bookData.plot;
      bookAuthor.textContent = bookData.author;
    } else {
      // Jeśli brak danych, wyświetl komunikat
      console.warn('Brak danych z API.');
    }
  } else {
    console.warn('Div .book-card nie istnieje.');
  }
};

// Funkcja obsługująca kliknięcie przycisku usuwania
function deleteBookCard() {
  // Pobierz referencję do diva .book-card
  const bookCard = document.querySelector('.book-card');

  // Sprawdź, czy div .book-card istnieje
  if (bookCard) {
    // Usuń div .book-card
    bookCard.remove();
    // Po usunięciu karty, sprawdź stan kart
    checkBookCardExistence();
    // Pobierz i wyświetl nowe dane z API
    displayBooksFromAPI();
  } else {
    console.warn('Div .book-card do usunięcia nie istnieje.');
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
    // Sprawdź, czy komunikat istnieje i usuń go
    if (emptyMessage) {
      emptyMessage.remove();
    }
  } else {
    // Sprawdź, czy komunikat nie istnieje i dodaj go
    if (!emptyMessage) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'book-message';
      messageDiv.textContent = 'This page is empty, add some books and proceed to order.';
      document.body.appendChild(messageDiv);
    }
  }
}

// Pobierz i wyświetl dane z API po załadowaniu strony
document.addEventListener('DOMContentLoaded', async () => {
  const booksData = await fetchBooks('category');

  // Wyświetl dane na karcie
  displayBooksFromAPI(booksData && booksData.length > 0 ? booksData[0] : null);
  // Sprawdź stan kart
  checkBookCardExistence();
});

// Pobierz wszystkie przyciski .button-delete i dodaj nasłuchiwanie na kliknięcie
const deleteButtons = document.querySelectorAll('.button-delete');
deleteButtons.forEach(function (button) {
  button.addEventListener('click', deleteBookCard);
});
