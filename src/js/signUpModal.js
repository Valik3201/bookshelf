const modalForm = document.querySelector('.sign-up-modal');
const openModal = document.querySelector('.sign-up-modal-open');
const closeModal = document.querySelector('.sign-up-modal-close');

const modalAction = () => {
  modalForm.classList.toggle('is-hidden');
};

openModal.addEventListener('click', modalAction);
closeModal.addEventListener('click', modalAction);
