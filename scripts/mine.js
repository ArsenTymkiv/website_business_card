document.addEventListener("DOMContentLoaded", function() {

  /*  BUTTON MOBILE */
  let button = document.querySelector('#icon');
  let menu = document.querySelector('.hamburger_links');
  button.addEventListener('click', () =>{ 
    
    menu.classList.toggle('nav_active');
    button.childNodes[1].classList.toggle("fa-xmark");
  });


  

 /* SCROLL ACTIVE MENU*/
  let arr_sel = document.querySelectorAll(`[href*="section"]`);
  let elements1 = document.querySelectorAll(`[id^="section"]`);
 
 
  window.addEventListener('scroll', function() {
    
    elements1.forEach((element) =>{
    var position = element.getBoundingClientRect();
    // checking for partial visibility
    if(position.top < window.innerHeight && position.bottom >= 50) {
      arr_sel.forEach((a_el)=>{
        let r = a_el.href.match(/[^#]+$/);
        console.log(r[0]);
        if(r[0]===element.id){
          a_el.classList.add("active");
        }else if(element.id==="section7"){
          a_el.classList.remove("active");
          document.querySelector(".cta button").classList.add("active_b");
        }else{
          a_el.classList.remove("active");
          document.querySelector(".cta button").classList.remove("active_b");
        };
       
      })
    }
  })



  });




});
/* SCROLL HEADER  fixed*/
window.onscroll = function() {showHeader()};

function showHeader() {
let header = document.querySelector('header');
if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  header.classList.add('fixed');
} else {
  header.classList.remove('fixed');
}
}




