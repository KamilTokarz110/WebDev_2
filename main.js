// $('nav a').on('click', function(){
//   const goToSection =  "[data-section" + $(this).attr('class')} + "]";
 
  
//   console.log(goToSection);

//   $('body, html').animate({
//       scrollTop: $(goToSection).offset().top
//   })
    

// })
//Dzziała
// $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('nav').addClass('menu--scrolled');
//         $('.wrapper section').each(function(i) {
//             if ($(this).position().top <= windscroll - 100) {
//                 $('nav menu--scrolled').removeClass('menu--scrolled');
//                 $('nav li').eq(i).addClass('menu__item--active');
//             }
//         });

//     } else {

//         $('nav').removeClass('menu--scrolled');
//         $('nav li.menu__item--active').removeClass('menu__item--active');
//         $('nav li:first').addClass('menu__item--active');
//     }

// }).scroll()


   

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

$(document).ready(function() {
    $(window).scroll(function() {

        var scrollPosition = $(window).scrollTop();
        //Positions of the containters
        var homePosition = $("#home").offset().top,
            aboutPosition = $('#about').offset().top,
            servicesPositon = $('#services').offset().top,
            galleryPosition = $('#gallery').offset().top,
            //subscribePosition = $('#subscribe').offset().top,
            blogPosition = $('#blog').offset().top,
            contactPosition = $("#contact").offset().top;
            //get the nav elements
            var navHome = $("#nav1"),
                navAbout = $("#nav2"),
                navServices = $("#nav3"),
                navGallery = $("#nav4"),
                navBlog = $("#nav5"),
                navContact = $("#nav6");
            var navigation = $(".menu");    

            if(scrollPosition >= homePosition){
                navigation.addClass("menu--scrolled");
            } 
             if(scrollPosition <= homePosition) {
                navigation.removeClass("menu--scrolled");
            }
            if(scrollPosition >= homePosition ){
                navHome.siblings().removeClass("menu__item--active");
                navHome.addClass("menu__item--active");
                
            }  
            if(scrollPosition >= aboutPosition ){
                navAbout.siblings().removeClass("menu__item--active");
                navAbout.addClass("menu__item--active");
            } 
            if(scrollPosition >= servicesPositon ){
                navServices.siblings().removeClass("menu__item--active");
                navServices.addClass("menu__item--active");
            } 
            if(scrollPosition >= galleryPosition ){
                navGallery.siblings().removeClass("menu__item--active");
                navGallery.addClass("menu__item--active");
            } 
            if(scrollPosition >= blogPosition ){
                navBlog.siblings().removeClass("menu__item--active");
                navBlog.addClass("menu__item--active");
            } 
            if(scrollPosition >= contactPosition ){
                navContact.siblings().removeClass("menu__item--active");
                navContact.addClass("menu__item--active");
            } 
   
    $(".menu__item").click(function(){
        $(this).removeClass("menu__item--active");
        $(this).addClass("menu__item--active");

    });
});
});
//     // Select all links with hashes
// $('a[href*="#"]')
// // Remove links that don't actually link to anything
// .not('[href="#"]')
// .not('[href="#0"]')
// .click(function(event) {
//   // On-page links
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//     && 
//     location.hostname == this.hostname
//   ) {
//     // Figure out element to scroll to
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     // Does a scroll target exist?
//     if (target.length) {
//       // Only prevent default if animation is actually gonna happen
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000, function() {
//         // Callback after animation
//         // Must change focus!
//         var $target = $(target);
//         $target.focus();
//         if ($target.is(":focus")) { // Checking if the target was focused
//           return false;
//         } else {
//           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//           $target.focus(); // Set focus again
//         };
//       });
//     }
//   }
// });
// });
      

            



    
    
