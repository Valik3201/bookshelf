import { fetchBooks } from './bookAPI.js';

//Funkcja dodająca książkę do localStorage
export const addToLocalStorage = async bookId => {
  //wykonujemy zapytanie do serwera w celu pobrania danych o książce
  const bookById = await fetchBooks(bookId);

  //sprawdzamy czy lacalStorage jest obsługiwane w bieżącej przeglądarce
  if (typeof Storage != 'undefined') {
    //pobieramy aktualną wartość a localStorage (jeśli istnieje)
    var storedBooks = JSON.parse(localStorage.getItem('books')) || [];

    //tworzymy unikalny lkucz dla każdej książki
    var localStorageKey = 'book_' + bookId;

    //sprawdzamy czy klucz już istnieje w localStorage
    if (localStorage.getItem(localStorageKey)) {
      console.log('Książka już istnieje w localStorage.');
      return;
    }

    //tworzymy obiekt dle nowej książki
    var newBook = {
      bookId: bookId,
      _id: bookById._id,
      title: bookById.title,
      list_name: bookById.list_name,
      author: bookById.author,
      book_image: bookById.book_image,
      description: bookById.description,
      buy_links: bookById.buy_links,
    };

    //dodajemy nową książkę do tablicy
    storedBooks.push(newBook);

    // zapisujemy zaktualizowaną tablicę w localStorage pod unikalnym kluczem
    localStorage.setItem(localStorageKey, JSON.stringify(newBook));

    console.log('Książka dodana do localStorage:', newBook);
  } else {
    console.log('Twoja przeglądarka nie obsługuje localStorage');
  }
};
