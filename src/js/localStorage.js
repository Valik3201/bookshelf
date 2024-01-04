import { fetchBooks } from './bookAPI.js';

//Funkcja dodająca książkę do localStorage
export const addToLocalStorage = async bookId => {
  //wykonujemy zapytanie do serwera w celu pobrania danych o książce
  const bookById = await fetchBooks(bookId);

  //sprawdzamy czy lacalStorage jest obsługiwane w bieżącej przeglądarce
  if (typeof Storage != 'undefined') {
    //pobieramy aktualną wartość a localStorage (jeśli istnieje)
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];

    //tworzymy unikalny lkucz dla każdej książki
    const localStorageKey = 'book_' + bookId;

    //sprawdzamy czy klucz już istnieje w localStorage
    if (localStorage.getItem(localStorageKey)) {
      console.log('Książka już istnieje w localStorage.');
      return;
    }

    //tworzymy obiekt dle nowej książki
    const newBook = {
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

// Funkcja pobierająca listę książek z localStorage
export const getBooksFromLocalStorage = () => {
  // Sprawdzamy czy localStorage jest obsługiwane w bieżącej przeglądarce
  if (typeof Storage !== 'undefined') {
    const storedBooks = [];

    // Iterujemy przez wszystkie klucze w localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Sprawdzamy czy klucz zaczyna się od 'book_'
      if (key.startsWith('book_')) {
        // Pobieramy wartość z localStorage dla danego klucza
        const bookData = JSON.parse(localStorage.getItem(key));

        // Dodajemy książkę do tablicy
        storedBooks.push(bookData);
      }
    }

    console.log('Lista książek z localStorage:', storedBooks);
    return storedBooks;
  } else {
    console.log('Twoja przeglądarka nie obsługuje localStorage');
    return [];
  }
};

export const displayBooksFromLocalStorage = () => {
  // Pobierz listę książek z localStorage
  const storedBooks = getBooksFromLocalStorage();

  // Znajdź kontener na stronie, do którego będziemy dodawać książki
  const container = document.querySelector('.books-container');

  const imageBooks = new URL('/src/images/books.png', import.meta.url).href;
  // Sprawdź, czy localStorage jest pusty
  if (storedBooks.length === 0 && container) {
    // Jeśli localStorage jest pusty, wyświetl komunikat
    const emptyMessageMarkup = `
      <div class="book-message">This page is empty, add some books and proceed to order.</div>
      <img class="books-img" src="${imageBooks}" alt="books" />
    `;

    container.innerHTML = emptyMessageMarkup;
  } else if (container) {
    // Jeśli localStorage nie jest pusty, dodaj książki do kontenera
    storedBooks.forEach(book => {
      const { _id, list_name, title, author, book_image, description, buy_links } = book;

      const buyLinks = [
        {
          name: 'Amazon',
          imageUrl: new URL('/src/images/amazon.png', import.meta.url).href,
          buyUrl: '',
        },
        {
          name: 'Apple Books',
          imageUrl: new URL('/src/images/apple.png', import.meta.url).href,
          buyUrl: '',
        },
      ];

      const filteredBuyLinks = buy_links.filter(link =>
        buyLinks.some(store => store.name === link.name),
      );

      buyLinks.forEach(store => {
        const link = filteredBuyLinks.find(filteredLink => filteredLink.name === store.name);
        store.buyUrl = link ? link.url : '';
      });

      const buyLinksMarkup = buyLinks
        .map(
          store =>
            `<a href="${store.buyUrl}" target="_blank"><img src="${store.imageUrl}" alt="${store.name}"></a>`,
        )
        .join('');

      const placeholderImageURL = new URL('/src/images/placeholder.jpg', import.meta.url).href;

      const iconTrashURL = new URL('/src/images/icons.svg', import.meta.url).href;

      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgElement.classList.add('icon-trash');

      const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      useElement.setAttribute('href', `${iconTrashURL}#icon-trash`);

      svgElement.appendChild(useElement);

      const svgString = new XMLSerializer().serializeToString(svgElement);

      const markup = `
        <div class="book-card">
          <img class="books-card-img lazyload" src="${placeholderImageURL}" data-src="${book_image}" alt="${title}">
        
          <div class="book-description">
            <button class="button-delete" type="button" data-book-id="${_id}">
              ${svgString}
            </button>
            <p class="book-title">${title}</p>
            <p class="book-genre">${list_name}</p>
            <p class="book-plot">${
              description ? description : 'Sorry, the description for this book is not available.'
            }</p>
            <p class="book-author">${author}</p>
            <div class="book-buy-links">${buyLinksMarkup}</div>
          </div>
        </div>
      `;

      // Dodaj wygenerowany markup do kontenera
      container.innerHTML += markup;
    });

    // Dodaj obsługę zdarzenia dla każdego przycisku usuwania
    const deleteButtons = container.querySelectorAll('.button-delete');
    deleteButtons.forEach(deleteButton => {
      deleteButton.removeEventListener('click', handleDeleteButtonClick);
      deleteButton.addEventListener('click', handleDeleteButtonClick);
    });
  }
};

// Funkcja obsługująca kliknięcie przycisku usuwania
const handleDeleteButtonClick = event => {
  const bookId = event.currentTarget.getAttribute('data-book-id');

  // Usuń książkę z localStorage
  removeFromLocalStorage(bookId);

  document.querySelector('.books-container').innerHTML = '';

  // Ponownie wyświetl książki (aktualizacja widoku)
  displayBooksFromLocalStorage();
};

// Funkcja usuwająca książkę z localStorage
const removeFromLocalStorage = bookId => {
  const localStorageKey = 'book_' + bookId;
  localStorage.removeItem(localStorageKey);
};

displayBooksFromLocalStorage();
