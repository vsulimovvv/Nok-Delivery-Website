window.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  // * ==== Slider
  (function slider() {
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
  })();

  // * ==== Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
  }());

  // * ==== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.forEach(el => {
          el.addEventListener('click', e => {

            if (e.target) {
              e.preventDefault()
            }

            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        })

        closeEl.forEach(btn => {
          btn.addEventListener('click', e => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        })

        modalEl.addEventListener('click', e => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        })
      };
    };
    bindModal('.menu__back-call', '.popup--back-call', '.popup__close');
    bindModal('.contacts__btn', '.popup--write', '.popup__close');
    bindModal('.partner-btn', '.popup--partner', '.popup__close');
    bindModal('.courier-btn', '.popup--courier', '.popup__close');
  }());

  (function changeTheme() {
    const toggleTheme = document.querySelector('.toggle-theme');
    const selectedTheme = localStorage.getItem('selected-theme');

    function getCurrentTheme() {
      if (document.querySelector('body').classList.contains('dark-theme')) {
        return 'dark'
      } else {
        return 'light'
      }
    }

    if (selectedTheme) {
      if (selectedTheme === 'light') {
        document.querySelector('body').classList.remove('dark-theme');
        toggleTheme.classList.remove('active');
      } else {
        document.querySelector('body').classList.add('dark-theme');
        toggleTheme.classList.add('active');
      }
    }

    toggleTheme.addEventListener('click', () => {
      document.querySelector('body').classList.toggle('dark-theme');
      toggleTheme.classList.toggle('active');

      localStorage.setItem('selected-theme', getCurrentTheme());
    });
  }());

  // * ==== Change
  (function changeHeader() {
    const header = document.querySelector('header');
    if (window.pageYOffset >= 100) {
      console.log(1);
      header.classList.add('scroll-header');
    }
  })();

  //* ==== Show scroll top
  function scrollTop() {
    const scrollTopEl = document.getElementById('scroll-top');
    if (this.scrollY >= 560) {
      scrollTopEl.classList.add('show-scroll');
    } else {
      scrollTopEl.classList.remove('show-scroll');
    }
  }

  //* ==== Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 100) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }

  window.addEventListener('scroll', scrollHeader);
  window.addEventListener('scroll', scrollTop);
});