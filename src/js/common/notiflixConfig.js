// Importing Notiflix Notify and Loading modules for notifications and loading indicators
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

// Initializing Notiflix Notify with custom settings
Notify.init({
  fontSize: '1rem',
  width: '550px',
  cssAnimationStyle: 'from-bottom',
  useIcon: false,
  success: {
    background: '#4f2ee8',
  },
  info: {
    background: '#EAC645',
  },
});

// Initializing Notiflix Loading with custom settings
Loading.init({
  svgColor: '#4f2ee8',
});

export { Notify, Loading };
