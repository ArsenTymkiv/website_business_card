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




/////////////////////////////////////////////////

let elements1 = document.querySelectorAll(`[id^="section"]`);

console.log(elements1); 

window.addEventListener('scroll', function() {
	var element = document.querySelector('.card');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		console.log('Element is fully visible in screen');
	}

	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {
		console.log('Element is partially visible in screen');
	}
});
