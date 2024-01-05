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

const foundationList = document.querySelector('.swiper-wrapper');

charityData.forEach(function (item, index) {
  var slideNumber = (index + 1).toString().padStart(2, '0');
  var imgSrc = item.imgUrl.img;
  var imgSrcset = `
    ${item.imgUrl.img} 1x,
    ${item.imgUrl.img1x} 2x,
    ${item.imgUrl.img2x} 3x
  `;

  var slideHTML = `
    <div class="swiper-slide">
      <div class="swiper-slide-number">${slideNumber}</div>
      <a href="${item.url}" target="_blank">
        <img src="${imgSrc}" srcset="${imgSrcset}" alt="${item.title}">
      </a>
    </div>
  `;

  foundationList.insertAdjacentHTML('beforeend', slideHTML);
});

swiper.on('reachEnd', function () {
  document.querySelector('.swiper-button-next').classList.add('rotate');
  document.querySelector('.swiper-button-prev').style.display = 'flex';
});

swiper.on('reachBeginning', function () {
  document.querySelector('.swiper-button-next').classList.remove('rotate');
  document.querySelector('.swiper-button-prev').style.display = 'none';
});
