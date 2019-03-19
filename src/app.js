
// smooth scrolling with JQuery
$("#nav-bar a").click(function () {
  var id = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - $('#nav-bar').height()
  }, 500);
});


// cross fade info text

function introFade() {
  const content = [
    "I love learning and implementing tools to assemble solutions",
    "I'm a Full Stack Developer specializing in NERDS stack"
  ]

  let text = document.querySelector('#intro-text > h3');
  let current = 0;

  setInterval(function () {
    text.textContent = content[current];

    if (current > 0) {
      current = 0;
    } else {
      current++;
    }
  }, 3000);
}
introFade()

// setInterval(function () {
//   for (let i = 0; i < con.length; i++) {
//     textSlides[i].style.opacity = 1;
//   }

//   if (textSlides.length % current === 0) {
//     current = 0;
//   } else {
//     current++;
//   }
//   textSlides[current].style.opacity = 1;

// }, 2000);