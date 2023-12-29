// Modal

export function createModal(data) {
  const {
    _id,
    book_image,
    author,
    title,
    description,
    buy_links: [amazon, bookshop],
  } = data;

  const { bookShopIconPath, amazonIconPath } =
    getIconPaths();

  refs.addBtnEL.setAttribute('data_id_of_book', `${_id}`);

  return `            
    <img class="modal-img" src="${book_image}" alt="book cover" />
    <div class='modal-book-attributes'>
      <p class="modal-book-title">${title}</p>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-desc">${description}</p>
      <div class="modal-shops">
        <a class="modal-shop-link" href="${amazon.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
          <img class="modal-shop-img shopping-shopimg amazon" src="${amazonIconPath}" alt="Amazon link" aria-label="Buy this book on Amazon" />
        </a>
        <a class="modal-shop-link" href="${bookshop.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
          <img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIconPath}" alt="BookShop link" aria-label="Buy this book on BookShop"/>
        </a>
      </div>
    </div>
`;
}

function handleModalPopUpCloseBtnClick(e) {
  refs.modalPopUp.classList.add('is-hidden');
  document.body.style.removeProperty('overflow');
}

function handleBackdropClick(e) {
  if (e.target == refs.modalPopUp) {
    refs.modalPopUp.classList.add('is-hidden');
    document.body.style.removeProperty('overflow');
  }
}

function handleEscapeKeyDown(e) {
  if (e.key === 'Escape') {
    refs.modalPopUp.classList.add('is-hidden');
    document.body.style.removeProperty('overflow');
  }
}

refs.closeModalPopUpBtn.removeEventListener(
  'click',
  handleModalPopUpCloseBtnClick
);

document.removeEventListener('click', handleBackdropClick);

document.removeEventListener('keydown', handleEscapeKeyDown);