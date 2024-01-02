// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAM02cYOlrv_thfaNpu0NdBsBkK1_BXyXI',
  authDomain: 'bookshelf-85bf5.firebaseapp.com',
  projectId: 'bookshelf-85bf5',
  storageBucket: 'bookshelf-85bf5.appspot.com',
  messagingSenderId: '465326087705',
  appId: '1:465326087705:web:a5283f898df954825a5488',
  measurementId: 'G-96KXF37B2X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
