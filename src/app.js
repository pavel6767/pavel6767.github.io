let nav = document.getElementById('nav-bar');
let body = document.body;
nav.addEventListener('click', evt => {

  let tagName = evt.target.hash;
  let currentY = Math.max(window.pageYOffset, document.documentElement.scrollTop, body.scrollTop);
  let targetOffset = document.getElementById(tagName.slice(1)).offsetTop;

  console.log(`currentY :: ${currentY}`);
  console.log(`targetOffset :: ${targetOffset}`);


  body.classList.add('in-transition');

  body.style.WebkitTransform = `translate(0, -${targetOffset - currentY}px)`;
  body.style.MozTransform = `translate(0, -${targetOffset - currentY}px)`;
  body.style.transform = `translate(0, -${targetOffset - currentY}px)`;

  window.setTimeout(function () {
    body.classList.remove('in-transition');
    body.style.cssText = "";
    if (targetOffset > window.pageYOffset) targetOffset = document.body.scrollHeight;
    window.scrollTo(0, targetOffset);
  }, 600);

  evt.preventDefault();

}, false);

// button.addEventListener('click', function (event) {

//   targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
//   currentPosition = getPageScroll();

//   body.classList.add('in-transition');
//   body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
//   body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
//   body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

//   window.setTimeout(function () {
//     body.classList.remove('in-transition');
//     body.style.cssText = "";
//     window.scrollTo(0, targetOffset);
//   }, animateTime);

//   event.preventDefault();

// }, false);
