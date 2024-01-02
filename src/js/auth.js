import './auth';
import { updateProfile } from 'firebase/auth';
import { createUser } from './auth/authSignUpPassword.js';
import { signInUser } from './auth/authSignInPassword.js';
import { signOutUser } from './auth/authSignOut.js';

const signUpModal = document.querySelector('.sign-up-modal');
const signInModal = document.querySelector('.sign-in-modal');
const signUpButton = document.querySelector('.sign-up-button');
const switchToSignInButton = document.getElementById('switch-to-sign-in');
const switchToSignUpButton = document.getElementById('switch-to-sign-up');
const signUpForm = document.forms['signup-form'];
const signInForm = document.forms['signin-form'];
const signUpModalCloseButton = document.querySelector('.sign-up-modal-close');
const signInModalCloseButton = document.querySelector('.sign-in-modal-close');
const userNameDisplay = document.getElementById('user-name-display');

let currentForm = 'sign-up';

signUpButton.addEventListener('click', function () {
  currentForm = 'sign-up';
  showForm(currentForm);
});

switchToSignInButton.addEventListener('click', function () {
  currentForm = 'sign-in';
  showForm(currentForm);
});

switchToSignUpButton.addEventListener('click', function () {
  currentForm = 'sign-up';
  showForm(currentForm);
});

signUpModalCloseButton.addEventListener('click', function () {
  signUpModal.classList.add('is-hidden');
});

signInModalCloseButton.addEventListener('click', function () {
  signInModal.classList.add('is-hidden');
});

function showForm(form) {
  if (form === 'sign-up') {
    signUpForm.reset();
    signUpModal.classList.remove('is-hidden');
    signInModal.classList.add('is-hidden');
    userNameDisplay.textContent = '';
  } else if (form === 'sign-in') {
    signInForm.reset();
    signUpModal.classList.add('is-hidden');
    signInModal.classList.remove('is-hidden');
    userNameDisplay.textContent = '';
  }
}

signUpForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = signUpForm.elements['email'].value;
  const password = signUpForm.elements['password'].value;
  const name = signUpForm.elements['name'].value;

  try {
    const userCredential = await createUser(email, password);

    const user = userCredential.user;

    await updateProfile(user, { displayName: name, photoURL: 'basic photo' });

    signUpModal.classList.add('is-hidden');

    console.log('User signed up and profile updated:', user);
  } catch (error) {
    console.error('Authentication error:', error);
  }
});

signInForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = signInForm.elements['email'].value;
  const password = signInForm.elements['password'].value;

  if (currentForm === 'sign-in') {
    await signInUser(email, password);

    signInModal.classList.add('is-hidden');
  }
});
