import Swiper from 'swiper/bundle';

const banSlider = document.querySelector('.banner-slider');

const bannerSlider = new Swiper(banSlider, {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});