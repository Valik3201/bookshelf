// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

import { charityData } from './charityData.js';

Swiper.use([Navigation]);

const isMobile = window.innerWidth < 768;
const slidesPerView = isMobile ? 4 : 6;

const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: false,
  slidesPerView: slidesPerView,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Заполните слайды вашими данными
const foundationList = document.querySelector('.swiper-wrapper');

charityData.forEach(function (item, index) {
  var slideNumber = (index + 1).toString().padStart(2, '0');
  var slideHTML = `
      <div class="swiper-slide">
      <div class="swiper-slide-number">${slideNumber}</div>
        <a href="${item.url}" target="_blank">
            <img src="${item.img}" alt="${item.title}">
        </a>
      </div>
    `;

  foundationList.insertAdjacentHTML('beforeend', slideHTML);
});

swiper.on('reachEnd', function () {
  document.querySelector('.swiper-button-next').style.display = 'none';
  document.querySelector('.swiper-button-prev').style.display = 'block';
});

swiper.on('reachBeginning', function () {
  document.querySelector('.swiper-button-prev').style.display = 'none';
  document.querySelector('.swiper-button-next').style.display = 'block';
});
