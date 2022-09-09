document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('#icon');
    let menu = document.querySelector('.hamburger_links');
    // console.log(button)
    button.addEventListener('click', () => menu.classList.toggle('nav_active'));

    let header = document.querySelector('header');

  });

  window.onscroll = function() {showHeader()};

function showHeader() {
  let header = document.querySelector('header');
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}
