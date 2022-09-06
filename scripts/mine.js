document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('#icon');
    let menu = document.querySelector('.hamburger_links');
    // console.log(button)
    button.addEventListener('click', () => menu.classList.toggle('nav_active'))
  });
