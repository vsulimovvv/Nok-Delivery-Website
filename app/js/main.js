const swiper = new Swiper(".categories__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});

const showMenu = () => {
  const menuBtn = document.querySelector('.header__toggle');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  menuBtn.addEventListener('click', e => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    // overlay.classList.toggle('active');
    // body.classList.toggle('no-scroll');
  });



  // overlay.addEventListener('click', e => {
  //   menu.classList.remove('active');
  //   overlay.classList.remove('active');
  //   body.classList.remove('no-scroll');
  //   menuBtn.classList.remove('active');
  // });

  // overlay.addEventListener('click', e => {
  // menu.classList.remove('active');
  // menuBtn.classList.remove('active');
  // overlay.classList.remove('active');
  // body.classList.remove('no-scroll');
  // });

};
showMenu();