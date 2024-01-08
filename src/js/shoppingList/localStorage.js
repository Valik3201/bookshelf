import { fetchBookById } from '../fetch/bookAPI.js';

/**
 * Adds a book to localStorage based on the provided bookId.
 * @param {string} bookId - The ID of the book to be added.
 * @returns {void}
 */
export const addToLocalStorage = async bookId => {
  // Fetch book details using the provided bookId
  const bookById = await fetchBookById(bookId);

  // Check if localStorage is supported by the browser
  if (typeof Storage != 'undefined') {
    // Retrieve existing books from localStorage or initialize an empty array
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];

    // Create a unique key for the current book in localStorage
    const localStorageKey = 'book_' + bookId;

    // If the book is already in localStorage, do not add it again
    if (localStorage.getItem(localStorageKey)) {
      return;
    }

    // Prepare the new book object with selected properties
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

    // Add the new book to the array of stored books
    storedBooks.push(newBook);

    // Update localStorage with the new book and its key
    localStorage.setItem(localStorageKey, JSON.stringify(newBook));
  }
};

/**
 * Retrieves all books from localStorage.
 * @returns {Array} - An array containing book objects stored in localStorage.
 */
export const getBooksFromLocalStorage = () => {
  // Check if localStorage is supported by the browser
  if (typeof Storage !== 'undefined') {
    // Initialize an array to store retrieved books
    const storedBooks = [];

    // Iterate through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Check if the key represents a book entry
      if (key.startsWith('book_')) {
        const bookData = JSON.parse(localStorage.getItem(key));

        // Add the book data to the array
        storedBooks.push(bookData);
      }
    }

    return storedBooks;
  } else {
    // Return an empty array if localStorage is not supported
    return [];
  }
};

/**
 * Displays a subset of books from localStorage in a specified container.
 * @param {number} page - The page number to display.
 * @param {number} perPage - The number of books to display per page.
 * @returns {void}
 */
export const displayBooksFromLocalStorage = (page, perPage) => {
  // Retrieve all books from localStorage
  const storedBooks = getBooksFromLocalStorage();

  // Get the container element to display books
  const container = document.querySelector('.books-container');
  container.innerHTML = '';

  if (container) {
    // If localStorage is not empty, add books to the container
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const booksToDisplay = storedBooks.slice(startIndex, endIndex);

    booksToDisplay.forEach(book => {
      // Extract relevant properties from the book object
      const { _id, list_name, title, author, book_image, description, buy_links } = book;

      // Define an array of buy links with default values
      const buyLinks = [
        {
          name: 'Amazon',
          imageUrl: new URL('/src/images/amazon.png', import.meta.url).href,
          buyUrl: '',
        },
        {
          name: 'Apple Books',
          imageUrl: new URL('/src/images/apple-books.png', import.meta.url).href,
          buyUrl: '',
        },
      ];

      // Filter buy_links based on predefined buyLinks array
      const filteredBuyLinks = buy_links.filter(link =>
        buyLinks.some(store => store.name === link.name),
      );

      // Update buyUrl in buyLinks array based on filtered links
      buyLinks.forEach(store => {
        const link = filteredBuyLinks.find(filteredLink => filteredLink.name === store.name);
        store.buyUrl = link ? link.url : '';
      });

      // Generate markup for buy links
      const buyLinksMarkup = buyLinks
        .map(
          store =>
            `<a href="${store.buyUrl}" target="_blank"><img src="${store.imageUrl}" alt="${store.name}"></a>`,
        )
        .join('');

      // Define placeholder image URL and icon trash URL
      const placeholderImageURL = new URL('/src/images/placeholder.jpg', import.meta.url).href;
      const iconTrashURL = new URL('/src/images/icons.svg', import.meta.url).href;

      // Create SVG elements for the trash icon
      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgElement.classList.add('icon-trash');

      const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      useElement.setAttribute('href', `${iconTrashURL}#icon-trash`);

      svgElement.appendChild(useElement);

      // Convert SVG element to string
      const svgString = new XMLSerializer().serializeToString(svgElement);

      // Generate HTML markup for each book card
      const markup = `
        <div class="book-card">
          <img class="books-card-img lazyload" src="${placeholderImageURL}" data-src="${book_image}" alt="${title}">
        
          <div class="book-description">
            <button class="button-delete" type="button" data-book-id="${_id}">
              ${svgString}
            </button>
            <div class="book-info">
              <p class="book-title">${title}</p>
              <p class="book-genre">${list_name}</p>
              <p class="book-plot">${
                description ? description : 'Sorry, the description for this book is not available.'
              }</p>
            </div>
            <p class="book-author">${author}</p>
            <div class="book-buy-links">${buyLinksMarkup}</div>
          </div>
        </div>
      `;

      // Append the generated markup to the container
      container.innerHTML += markup;
    });
  }
};

/**
 * Removes a book from localStorage based on the provided bookId.
 * @param {string} bookId - The ID of the book to be removed.
 * @returns {void}
 */
export const removeFromLocalStorage = bookId => {
  // Create a unique key for the book in localStorage
  const localStorageKey = 'book_' + bookId;

  // Remove the book entry from localStorage
  localStorage.removeItem(localStorageKey);
};

/**
 * Checks if a book with the given bookId is present in localStorage.
 * @param {string} bookId - The ID of the book to check.
 * @returns {boolean} - True if the book is present, false otherwise.
 */
export const checkIfBookInLocalStorage = bookId => {
  // Create a unique key for the book in localStorage
  const localStorageKey = 'book_' + bookId;

  // Check if the book entry exists in localStorage
  return localStorage.getItem(localStorageKey) !== null;
};

/**
 * Toggles the display of the congratulatory message.
 * @param {boolean} show - True to display the message, false to hide it.
 * @returns {void}
 */
export const toggleCongratulatoryMessage = show => {
  // Get the congratulatory message element
  const congratulatoryMessage = document.querySelector('.congratulatory-message');

  // Toggle the display based on the provided show parameter
  if (congratulatoryMessage) {
    congratulatoryMessage.style.display = show ? 'block' : 'none';
  }
};
