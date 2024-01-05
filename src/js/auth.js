import './auth';
import { updateProfile } from 'firebase/auth';
import { createUser } from './auth/authSignUpPassword.js';
import { signInUser } from './auth/authSignInPassword.js';
import { signOutUser } from './auth/authSignOut.js';
import { onAuthStateChangedListener } from './auth/authStateListener.js';

const signUpModal = document.querySelector('.sign-up-modal');
const signInModal = document.querySelector('.sign-in-modal');

export const signUpButton = document.querySelector('.sign-up-button');
export const logOutButton = document.querySelector('#log-out');

const switchToSignInButton = document.querySelector('#switch-to-sign-in');
const switchToSignUpButton = document.querySelector('#switch-to-sign-up');
const signUpForm = document.querySelector('form[name="signup-form"]');
const signInForm = document.querySelector('form[name="signin-form"]');
const signUpModalCloseButton = document.querySelector('.sign-up-modal-close');
const signInModalCloseButton = document.querySelector('.sign-in-modal-close');
const userNameDisplay = document.querySelector('#user-name-display');

export const userProfile = document.querySelector('#user-profile');
export const userButton = document.querySelector('#user-info');
export const userNavList = document.querySelector('.nav-list');

const userInfo = document.querySelector('#user-info');

userProfile.classList.add('hidden');

let currentForm = 'sign-up';

onAuthStateChangedListener(userNameDisplay);

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
  } else if (form === 'sign-in') {
    signInForm.reset();
    signUpModal.classList.add('is-hidden');
    signInModal.classList.remove('is-hidden');
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

    onAuthStateChangedListener(userNameDisplay);

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

    onAuthStateChangedListener(userNameDisplay);
  }
});

logOutButton.addEventListener('click', async function () {
  try {
    await signOutUser();
  } catch (error) {
    console.error('Logout error:', error);
  }
});

export const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

const toggleDropdownMenu = () => {
  const dropdownMenu = document.getElementById('user-dropdown-menu');
  dropdownMenu.classList.toggle('hidden');
};

userInfo.addEventListener('click', toggleDropdownMenu);
