const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup_close");

window.addEventListener("scroll", function () {
  let header = document.querySelector(".nav");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scroll_active", windowPosition);
});

function popup_blur() {
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
}

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
    popup_blur();
  }, 2000);
};

popup_close.addEventListener("click", () => {
  popup.style.display = "none";
  popup_blur();
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active_dot";
}
