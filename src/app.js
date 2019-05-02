
// smooth scrolling with JQuery
$("#nav-bar a").click(function () {
  var id = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - $('#nav-bar').height()
  }, 500);
});


