// swiper slide side-bar
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

// swiper slide sale_slide
var swiper = new Swiper(".sale_sec", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".product_swip", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
