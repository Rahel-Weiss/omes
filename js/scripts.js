$(document).ready(function() {
  var $item = $('.carousel-item');
  var $numberofSlides = $('.carousel-item').length;
  var $currentSlide = Math.floor((Math.random() * $numberofSlides));

  $item.eq($currentSlide).addClass('active');

   var scrollLink = $('.scroll');
// Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

  // Scroll Reveal

  window.sr = ScrollReveal();
  sr.reveal('.icon');
  sr.reveal('.card-text', { delay: 400 });
  sr.reveal('.team');
  sr.reveal('.business-logo');
  sr.reveal('.v-p');
  sr.reveal('.logo', {  delay: 400, duration: 3000, distance: '0px' });
  sr.reveal('.phone', {  delay: 400});
  sr.reveal('.email');

 

  });
