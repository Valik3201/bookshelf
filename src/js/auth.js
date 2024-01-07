// Import necessary functions and modules
import './auth';
import { updateProfile } from 'firebase/auth';
import { createUser } from './auth/authSignUpPassword.js';
import { signInUser } from './auth/authSignInPassword.js';
import { signOutUser } from './auth/authSignOut.js';
import { onAuthStateChangedListener } from './auth/authStateListener.js';

// DOM elements
const signUpModal = document.querySelector('.sign-up-modal');
const signInModal = document.querySelector('.sign-in-modal');

export const signUpButtons = document.querySelectorAll('.sign-up-button');
export const logOutButton = document.querySelector('#log-out');

export const userProfileMobile = document.querySelector('#mobile-user-profile');
export const userNameDisplayMobile = document.querySelector('#user-name-display-mobile');

const logOutMobileButton = document.querySelector('#mobile-log-out-button');

const switchToSignInButtons = document.querySelectorAll('[data-switch="sign-in"]');
const switchToSignUpButtons = document.querySelectorAll('[data-switch="sign-up"]');

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

// Attach listener for authentication state changes
onAuthStateChangedListener(userNameDisplay);

// Add event listeners for switching between sign-up and sign-in forms
signUpButtons.forEach(button => {
  button.addEventListener('click', function () {
    currentForm = 'sign-up';
    showForm(currentForm);
  });
});

switchToSignInButtons.forEach(button => {
  button.addEventListener('click', function () {
    currentForm = 'sign-in';
    showForm(currentForm);
  });
});

switchToSignUpButtons.forEach(button => {
  button.addEventListener('click', function () {
    currentForm = 'sign-up';
    showForm(currentForm);
  });
});

// Add event listeners for closing sign-up and sign-in modals
signUpModalCloseButton.addEventListener('click', function () {
  signUpModal.classList.add('is-hidden');
});

signInModalCloseButton.addEventListener('click', function () {
  signInModal.classList.add('is-hidden');
});

// Closing with keyboard keys

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (currentForm === 'sign-up') {
      signUpModal.classList.add('is-hidden');
    } else {
      signInModal.classList.add('is-hidden');
    }
  }
});

// Function to show the appropriate form based on the current state
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

// Add event listener for sign-up form submission
signUpForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = signUpForm.elements['email'].value;
  const password = signUpForm.elements['password'].value;
  const name = signUpForm.elements['name'].value;

  try {
    // Create a new user and update the user profile
    const userCredential = await createUser(email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: name, photoURL: 'basic photo' });

    // Hide sign-up modal and update user display name
    signUpModal.classList.add('is-hidden');
    onAuthStateChangedListener(userNameDisplay);

    console.log('User signed up and profile updated:', user);
  } catch (error) {
    console.error('Authentication error:', error);
  }
});

// Add event listener for sign-in form submission
signInForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = signInForm.elements['email'].value;
  const password = signInForm.elements['password'].value;

  if (currentForm === 'sign-in') {
    // Sign in the user and hide the sign-in modal
    await signInUser(email, password);
    signInModal.classList.add('is-hidden');
    onAuthStateChangedListener(userNameDisplay);
  }
});

// Add event listeners for log out buttons
logOutButton.addEventListener('click', async function () {
  try {
    await signOutUser();
  } catch (error) {
    console.error('Logout error:', error);
  }
});

logOutMobileButton.addEventListener('click', async function () {
  try {
    await signOutUser();
  } catch (error) {
    console.error('Logout error:', error);
  }
});

// Exported function for handling logout
export const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

// Function to toggle the visibility of the user dropdown menu
const toggleDropdownMenu = () => {
  const dropdownMenu = document.getElementById('user-dropdown-menu');
  dropdownMenu.classList.toggle('hidden');
};

// Add event listener to toggle the dropdown menu on user info click
userInfo.addEventListener('click', toggleDropdownMenu);
