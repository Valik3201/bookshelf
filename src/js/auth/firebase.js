import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

// Firebase configuration object with credentials
const firebaseConfig = {
  apiKey: 'AIzaSyAM02cYOlrv_thfaNpu0NdBsBkK1_BXyXI',
  authDomain: 'bookshelf-85bf5.firebaseapp.com',
  projectId: 'bookshelf-85bf5',
  storageBucket: 'bookshelf-85bf5.appspot.com',
  messagingSenderId: '465326087705',
  appId: '1:465326087705:web:a5283f898df954825a5488',
  measurementId: 'G-96KXF37B2X',
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Get authentication instance from the initialized Firebase app
export const auth = getAuth(app);
