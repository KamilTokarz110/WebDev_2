<<<<<<< HEAD

const navigation = document.querySelector("#navigation");
const sectionOne = document.querySelector(".header");



const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting) {
            navigation.classList.add("menu--scrolled");
        } else{
            navigation.classList.remove("menu--scrolled");
        }
    });


},sectionOneOptions);
sectionOneObserver.observe(sectionOne);

window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;
=======
$(document).ready(function() {
    $(window).scroll(function() {
>>>>>>> 5891e7de39b296b297d49a5bc5cc680a34a947c9

    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);

<<<<<<< HEAD
        if(
            section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop
            ) {
            
                link.classList.add('menu__link--active');
        
            } else {
                link.classList.remove('menu__link--active');
            }
        
        
});
});
=======
            if(scrollPosition >= homePosition +100){
                navigation.addClass("menu--scrolled");
            } 
             if(scrollPosition <= homePosition + 700) {
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
   
   
});
});

      

>>>>>>> 5891e7de39b296b297d49a5bc5cc680a34a947c9
            



    
    
