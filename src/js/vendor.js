import Swiper, { Navigation } from "swiper";

new Swiper(".js-reviews-slider", {
  modules: [Navigation],
  autoHeight: true,
  spaceBetween: 40,
  navigation: {
    prevEl: ".js-reviews-slider-prev",
    nextEl: ".js-reviews-slider-next",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
