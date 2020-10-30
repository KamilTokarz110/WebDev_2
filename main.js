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

      

            



    
    
