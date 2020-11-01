
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

    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);

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
            



    
    
