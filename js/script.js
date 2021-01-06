  AOS.init();

  var nav = document.getElementsByClassName('nav');
  var nava = document.getElementsByClassName('nav a');


  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
    $('nav a').toggleClass('scrolled', $(this).scrollTop() > 600);
  })