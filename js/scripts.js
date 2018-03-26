$(document).ready(function() {
  var $item = $('.carousel-item');
  var $numberofSlides = $('.carousel-item').length;
  var $currentSlide = Math.floor((Math.random() * $numberofSlides));

  $item.eq($currentSlide).addClass('active');

  });
