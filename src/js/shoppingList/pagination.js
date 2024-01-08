import { getBooksFromLocalStorage } from './localStorage.js';

const paginationSection = document.querySelector('.pagination');
const paginationContainerPages = document.querySelector('.pagination_container-pages');
const paginationContainerBackBtn = document.querySelector('.pagination_container-back');
const paginationContainerEndBtn = document.querySelector('.pagination_container-end');
const startButton = document.querySelector("button[name='startButton']");
const previousButton = document.querySelector("button[name='previousButton']");
const nextButton = document.querySelector("button[name='nextButton']");
const endButton = document.querySelector("button[name='endButton']");

const shoppingList = getBooksFromLocalStorage();

const pageSize = 3;

const numberOfItemsInLocalStorage = shoppingList.length;

let totalPages = Math.ceil(numberOfItemsInLocalStorage / pageSize);

let currentPage = 1;

// Check if paginationContainerPages is not null before interacting with it
if (paginationContainerPages) {
  for (let i = 1; i <= totalPages; i++) {
    if (shoppingList.length <= 3) {
      return;
    }
    const pageNumber = i;
    const button = document.createElement('button');
    button.classList.add('pagination_btn');
    button.classList.add('pagination_btn--pages');
    button.textContent = i;

    activDisplayFlexOnElement(paginationContainerBackBtn);
    activDisplayFlexOnElement(paginationContainerEndBtn);

    button.addEventListener('click', () => {
      currentPage = pageNumber;
      removeDisableforElement(startButton);
      removeDisableforElement(endButton);
    });
    paginationContainerPages.appendChild(button);
  }

  // Check if paginationContainerPages has child nodes before accessing the first child
  if (paginationContainerPages.firstChild) {
    paginationContainerPages.firstChild.classList.add('active');
  }

  paginationSection.addEventListener('click', handlerPaginationButtonsStartPreviousNextStart);
}

function handlerPaginationButtonsStartPreviousNextStart(event) {
  const activButton = document.querySelector('.active');
  console.log(event.target);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  switch (event.target) {
    case previousButton:
      if (currentPage > 1) {
        currentPage--;
        removeDisableforElement(endButton);

        activButton.classList.remove('active');
        activButton.previousElementSibling.classList.add('active');
      }
      break;

    case nextButton:
      if (currentPage < totalPages) {
        currentPage++;
        removeDisableforElement(startButton);

        activButton.classList.remove('active');
        activButton.nextElementSibling.classList.add('active');
      }
      break;

    case startButton:
      currentPage = 1;
      addDisableforElement(startButton);
      removeDisableforElement(endButton);
      highlighteTheCurrentPage(paginationContainerPages.firstChild);
      break;

    case endButton:
      currentPage = totalPages;
      addDisableforElement(endButton);
      removeDisableforElement(startButton);
      highlighteTheCurrentPage(paginationContainerPages.lastElementChild);
      break;
    default:
      break;
  }
}

function handleButtonPaginationContainerPages(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  highlighteTheCurrentPage(event.target);
}

function removeDisableforElement(element) {
  if (element) {
    element.disabled = false;
  }
}

function addDisableforElement(element) {
  if (element) {
    element.disabled = true;
  }
}

function activDisplayFlexOnElement(element) {
  if (element) {
    element.style.display = 'flex';
  }
}

function highlighteTheCurrentPage(element) {
  const activButton = document.querySelector('.active');

  if (activButton) {
    activButton.classList.remove('active');
  }

  if (element) {
    element.classList.add('active');
  }
}
