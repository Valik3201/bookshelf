import { userProfile } from './auth.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './auth/firebase';

const checkScreenWidth = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    userProfile.classList.add('hidden');
  } else {
    onAuthStateChanged(auth, user => {
      if (user) {
        userProfile.classList.remove('hidden');
      } else {
        userProfile.classList.add('hidden');
      }
    });
  }
};

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
