const scrollUpBtn = document.querySelector('#scrollUp');

const showScrollUpButton = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollUpBtn.classList.add('on');
  } else {
    scrollUpBtn.classList.remove('on');
  }
};

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  showScrollUpButton();
};

window.addEventListener('scroll', handleScroll);

scrollUpBtn.addEventListener('click', scrollUp);
