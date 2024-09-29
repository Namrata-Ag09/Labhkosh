document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);
    
    window.plusSlides = function(n) {
        clearInterval(slideInterval);
        showSlides(slideIndex += n);
        startSlideshow();
    }
    
    window.currentSlide = function(n) {
        clearInterval(slideInterval);
        showSlides(slideIndex = n);
        startSlideshow();
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    let slideInterval;
    
    function startSlideshow() {
        slideInterval = setInterval(function() {
            plusSlides(1);
        }, 3000);
    }
    
    startSlideshow();
});