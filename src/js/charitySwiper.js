// Import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

// Import charity data
import { charityData } from './charityData.js';

// Enable Swiper navigation module
Swiper.use([Navigation]);

// Initialize Swiper instance
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: false,
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// DOM element representing the container for foundation slides
const foundationList = document.querySelector('.swiper-wrapper');

// Populate Swiper slides with data from charityData
charityData.forEach(function (item, index) {
  // Generate slide number with leading zeros
  var slideNumber = (index + 1).toString().padStart(2, '0');

  // Generate image source and source set for responsive images
  var imgSrc = item.imgUrl.img;
  var imgSrcset = `
    ${item.imgUrl.img} 1x,
    ${item.imgUrl.img1x} 2x,
    ${item.imgUrl.img2x} 3x
  `;

  // Generate HTML markup for each foundation slide
  var slideHTML = `
    <div class="swiper-slide">
      <div class="swiper-slide-number">${slideNumber}</div>
      <a href="${item.url}" target="_blank">
        <img src="${imgSrc}" srcset="${imgSrcset}" alt="${item.title}">
      </a>
    </div>
  `;

  // Insert the slide HTML into the Swiper container
  foundationList.insertAdjacentHTML('beforeend', slideHTML);
});

// Event listener for reaching the end of slides
swiper.on('reachEnd', function () {
  document.querySelector('.swiper-button-next').classList.add('rotate');
  document.querySelector('.swiper-button-prev').style.display = 'flex';
});

// Event listener for reaching the beginning of slides
swiper.on('reachBeginning', function () {
  document.querySelector('.swiper-button-next').classList.remove('rotate');
  document.querySelector('.swiper-button-prev').style.display = 'none';
});
