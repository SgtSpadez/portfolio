// jQuery
$(document).ready(function() {

  // Slow scroll effect
  var $root = $('html, body');
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });

  // Hide header effect
  $(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();

       if(Math.abs(lastScrollTop - st) <= delta)
          return;

       if (st > lastScrollTop){
           // downscroll
           $("#header").addClass('hide-element')
           $('.mobile-handle-container').removeClass('mobile-menu-show');
           $('.mobile-nav-link').removeClass('show-element');
           $('.screen-overlay').removeClass('is-visible');
       } else {
          // upscroll
          $("#header").removeClass('hide-element');
          $('.mobile-handle-container').removeClass('mobile-menu-show');
          $('.mobile-nav-link').removeClass('show-element');
          $('.screen-overlay').removeClass('is-visible');
       }
       lastScrollTop = st;
    });
  });

  // Mobile menu handle
  $('.mobile-handle-container').on('click', function(event) {
    event.preventDefault();
    $('.mobile-handle-container').toggleClass('mobile-menu-show');
    $('.mobile-nav-link').toggleClass('show-element');
    $('.screen-overlay').toggleClass('is-visible');
  });

  // Hide mobile menu - overlay click
  $('.screen-overlay').on('click', function(event) {
    $('.mobile-handle-container').removeClass('mobile-menu-show');
    $('.mobile-nav-link').removeClass('show-element');
    $('.screen-overlay').removeClass('is-visible');
  });
});
