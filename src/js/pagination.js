import localStorage from './localStorage.js';

const divEl = document.querySelector('.localStorage.js');
const paginationsSection = document.querySelector('.pagination');
const paginationContainerPages = document.querySelector('.pagination_container-pages');
const paginationContainerBackBtn = document.querySelector('.pagination_container-back');
const paginationContainerEndBtn = document.querySelector('.pagination_container-end');
const startButton = document.querySelector("button[name='startButton']");
const previousButton = document.querySelector("button[name='previousButton']");
const nextButton = document.querySelector("button[name='nextButton']");
const endButton = document.querySelector("button[name='endButton']");

const shoppingList = JSON.parse(localStorage.getItem()) || [];

const pageSize = 3;
let totalPages = Math.ceil(shoppingList.length / pageSize);
let currentPage = 1;
let startIndex = (currentPage - 1) * pageSize;
let endIndex = startIndex + pageSize;
let itemsOnPage = shoppingList.slice(startIndex, endIndex);

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

paginationContainerPages.firstChild.classList.add('active');

paginationSection.addEventListener('click', handlerPaginationButtonsStartPreviousNextStart);

function handlerPaginationButtonsStartPreviousNextStart(event) {
  const activButton = document.querySelector('.active');
  console.log(event.target);
  if (event.terget.tagName !== 'BUTTON') {
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

paginationContainerPages.addEventListener('click', handleButtonPaginationContainerPages);

function handleButtonPaginationContainerPages(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  highlighteTheCurrentPage(event.target);
}

function deleteMarkup() {
  divEl.innerHTML = '';
}

function removeDisableforElement(element) {
  element.disabled = false;
}

function addDisableforElement(element) {
  element.disabled = true;
}

function activDisplayFlexOnElement(element) {
  element.style.display = 'flex';
}

function activeDisplayNoneOnElement(element) {
  element.style.display = 'none';
}

function destroyChildElement(element) {
  const a = shoppingList.length / pageSize;
  if (Math.round(a) === a) {
    return element.lastElementChild.remove();
  } else {
    return;
  }
}

function highlighteTheCurrentPage(element) {
  const activButton = document.querySelector('.active');

  if (activButton) {
    activButton.classList.remove('active');
  }

  element.classList.add('active');
}
