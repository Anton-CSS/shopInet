import Swiper from 'swiper/bundle';

const heroCatalogSlider = document.querySelector('.hero-catalog__slider');

const heroSlider = new Swiper(heroCatalogSlider, {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.hero-next-btn',
    prevEl: '.hero-prev-btn',
  },
});