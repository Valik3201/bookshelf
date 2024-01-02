import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase.js';

// Nasłuchujemy zmiany stanu autentykacji, czyli logowania i wylogowywania użytkownika
export const onAuthStateChangedListener = async () => {
  try {
    await onAuthStateChanged(auth, user => {
      if (user) {
        // Jeżeli użytkownik istnieje, oznacza to, że jest zalogowany
        const uid = user.uid;
        console.log('User signed in:', uid);
        // Tutaj możemy wykonać dodatkowe czynności po zalogowaniu użytkownika
      } else {
        // Jeżeli użytkownik nie istnieje, oznacza to, że jest wylogowany
        console.log('User signed out');
        // Вы можете выполнить дополнительные действия при выходе пользователя
      }
    });
  } catch (error) {
    // Tutaj możemy wykonać dodatkowe czynności po wylogowaniu użytkownika
    console.error('Error in onAuthStateChangedListener:', error);
  }
};

// const startAuthListener = async () => {
//   try {
//     await onAuthStateChangedListener();
//   } catch (error) {
//     console.error('Error starting auth listener:', error);
//   }
// };

// startAuthListener();
