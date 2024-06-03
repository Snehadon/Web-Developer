// form section

document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('ContactForm').style.display = 'flex';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('ContactForm')) {
        document.getElementById('ContactForm').style.display = 'none';
    }
});


// slider section
let slideIndex = 0;
let slider = document.querySelector('.slider-box');

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  let dots = document.getElementsByClassName("dot");
  if (n >= dots.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = dots.length - 1}
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  for (let dot of dots) {
      dot.classList.remove("active");
  }
  dots[slideIndex].classList.add("active");
}

function autoSlide() {
  showSlides(slideIndex += 1);
}

setInterval(autoSlide, 5000); // Change slide every 5 seconds




function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}