
// smooth scrolling with JQuery
$("#nav-bar a").click(function () {
  var id = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - $('#nav-bar').height()
  }, 500);
});


// cross fade info text

let intro = document.getElementById('intro-text');
let textSlides = intro.getElementsByTagName('h3');

let current = 0;

setInterval(function () {
  for (let i = 0; i < textSlides.length; i++) {
    textSlides[i].style.opacity = 1;
  }

  if (textSlides.length % current === 0) {
    current = 0;
  } else {
    current++;
  }
  textSlides[current].style.opacity = 1;

}, 2000);
