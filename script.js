// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Start the slideshow when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides();
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
}

// Apply form validation to all forms
document.addEventListener('DOMContentLoaded', (event) => {
    const forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        validateForm(forms[i].id);
    }
});

// Responsive navigation
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;';
document.querySelector('nav').prepend(navToggle);

navToggle.addEventListener('click', function() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
});