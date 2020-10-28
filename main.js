// $('nav a').on('click', function(){
//   const goToSection =  "[data-section" + $(this).attr('class')} + "]";
 
  
//   console.log(goToSection);

//   $('body, html').animate({
//       scrollTop: $(goToSection).offset().top
//   })
    

// })
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('nav').addClass('menu--scrolled');
        $('.wrapper section').each(function(i) {
            if ($(this).position().top <= windscroll - 100) {
                $('nav menu--scrolled').removeClass('menu--scrolled');
                $('nav li').eq(i).addClass('menu__item--active');
            }
        });

    } else {

        $('nav').removeClass('menu--scrolled');
        $('nav li.menu__item--active').removeClass('menu__item--active');
        $('nav li:first').addClass('menu__item--active');
    }

}).scroll()


   

// smoothScroll()

// let mainNavLinks = document.querySelectorAll("nav ul li a");
// let mainSections = document.querySelectorAll("section");

// let lastId;
// let cur = [];

// window.addEventListener("scroll", event =>{
//     let fromTop = window.scrollY;

//     mainNavLinks.forEach(link =>{
//         let section = document.querySelector(link.hash);

//         if(
//             section.offsetTop <= fromTop &&
//             section.offsetTop + section.offSetHeight > fromTop
//         ){
//             link.classList.add("menu__item--active");
//         } else {
//             link.classList.remove("menu__item--active");
//         }
//     });
// });

// $(document).ready(function(){
//     $('a[href*=#]').bind('click', function(e){
//         e.preventDefault();

//         var target = $(this).attr("href");

//         $('html, body').stop().animate({
//             scrollTop: $(target).offset().top
//         }, 600, function(){
//             location.hash = target;
//         });

//         return false;
//     });
// });
// $(window).scroll(function(){
//     var scrollDistance = $(window).scrollTop();
//     $('.page-section').each(function(i){
//         if($(this).position().top <= scrollDistance){
//             $('.menu .menu__item--active').removeClass('menu__item--active');
//             $('.menu .menu__item').addClass('menu__item--active');
//         };
//     });
// }).scroll();

// document.addEventListener('DOMContentLoaded', function (){
//     console.log("Witaj !");

//     const rootElement = document.querySelector('#root');
//     const sections = document.querySelectorAll('section');
//     let currentSectionIndex = 0;
//     let isThrottled = false;

//     setTimeout(function(){
//         isThrottled = false;
//     },1000);

//     document.addEventListener('mousewheel', function (event) {
       
//         if(isThrottled) return;
//         isThrottled = true;

//         const direction = event.wheelDelta < 0 ? 1 : -1;

//        if(direction === 1){
//            const isLastSection = currentSectionIndex === sections.length -1;
//            if(isLastSection) return;
//        } else if(direction === -1){
//            const isFirstSection = currentSectionIndex === 0;
//            if(isFirstSection) return;
//        }

//        currentSectionIndex = currentSectionIndex + direction;

//        console.log(currentSectionIndex);

//        sections[currentSectionIndex].scrollIntoView({
//            behavior: 'smooth',
//            block: 'start',
//        })

//     })
// })