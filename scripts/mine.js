document.addEventListener("DOMContentLoaded", function () {

  /*  MOBILE MENU */

  let mobile_menu_button = document.querySelector('.mobile_nav');
  let mobile_menu_items = document.querySelector('.mobile_menu');

  mobile_menu_button.addEventListener('click', () => {
    mobile_menu_items.classList.toggle('nav_active');
    handleMobileButton();
  });

  document.body.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.target !== document.querySelector('.mobile_nav'));
    if (mobile_menu_items.classList.contains('nav_active') && e.target !== document.querySelector(".mobile_nav i")) {
      handleMobileButton(true);
    }
  });

  window.addEventListener('scroll', function () {
    onScrollEventHandler();
  });



  function handleMobileButton(isBody = false) {
    let button_icon = document.querySelector(".mobile_nav i");
    if (isBody) mobile_menu_items.classList.toggle('nav_active');
      button_icon.classList.toggle("fa-bars");
      button_icon.classList.toggle("fa-xmark");
  }





});






/* SCROLL HEADER  fixed*/
window.onscroll = function () { showHeader() };

function showHeader() {
  let header = document.querySelector('header');
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

/* SCROLL ACTIVE MENU*/
function onScrollEventHandler() {
  // let arr_sel = document.querySelectorAll(`[href*="section"]`);
  let arrSections = document.querySelectorAll('[id^="section"]');
  arrSections.forEach((element) => {
    var position = element.getBoundingClientRect();
    if (position.top > 0 && position.top < window.innerHeight && position.bottom >= 0) {

      if (document.querySelector('.active')) document.querySelector('.active').classList.remove('active');
      if (document.querySelector('a[href="#' + element.id + '"]')) {
        document.querySelector('a[href="#' + element.id + '"]').classList.add('active');
      }
    }
  })
}




