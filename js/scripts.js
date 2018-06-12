$(document).ready(function() {

  $('.logo').delay(200).animate({'opacity':'1'},400);

  $(window).scroll(function(){
        $(".banner-content").delay(500).css("opacity", 1 - $(window).scrollTop() / $('.banner-content').height());
    });

  
  

  

   var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });


  // Scroll Reveal

  window.sr = ScrollReveal();
  sr.reveal('#section-one');
  sr.reveal('#section-two', { delay: 200 });
  sr.reveal('.read-more', { delay: 200 });
  sr.reveal('.icon');
  sr.reveal('.card-text', { delay: 400 });
  sr.reveal('.team', {origin: 'right'});
  sr.reveal('.v-p', { delay: 500 } );
  sr.reveal('.phone', {  delay: 400});
  sr.reveal('.email');
  });







