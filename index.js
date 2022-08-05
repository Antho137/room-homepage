// event that triggers the slide to change with a click from a current one to a new one 

function showSlides(n) {
    // variable that define the length of slides
    let slides = document.getElementsByClassName("slider");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    // iterate through slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // new slide to display after the last slide element
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// current slide to display
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// set default slide
let slideIndex = 1;
showSlides(slideIndex);


// show active state on the nav link element when clicked
$('.nav-link').click(function() {
    $('.nav-link').removeClass("active");
    $('li.nav-item.active').removeClass("active");
    $(this).addClass("active"); 
})