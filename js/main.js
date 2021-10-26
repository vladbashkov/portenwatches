const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('#navbarCollapse');
const headerInfo = document.querySelector('#headerInfo');
const body = document.querySelector('body');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
        menuList.classList.add('show-menu');
        headerInfo.classList.add('header-open_menu');
        body.classList.add('no-scroll');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
        menuList.classList.remove('show-menu');
        headerInfo.classList.remove('header-open_menu');
        body.classList.remove('no-scroll');
		menuOpen = false;
	}
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    effect: 'coverflow',
    speed: 800,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });