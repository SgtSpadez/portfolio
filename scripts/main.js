// jQuery
$(document).ready(function() {

  // Slow scroll effect
  var $root = $('html, body');
  $('.main-nav-link, .mobile-nav-link').click(function() {
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
           $('.project-modal').removeClass('show-modal');
           $('.project-modal-media-container').removeClass('show-modal');
       } else {
          // upscroll
          $("#header").removeClass('hide-element');
          $('.mobile-handle-container').removeClass('mobile-menu-show');
          $('.mobile-nav-link').removeClass('show-element');
          $('.screen-overlay').removeClass('is-visible');
          $('.project-modal').removeClass('show-modal');
          $('.project-modal-media-container').removeClass('show-modal');
       }
       lastScrollTop = st;
    });
  });

  // Mobile menu handle
  $('.mobile-handle-container').on('click', function(event) {
    event.preventDefault();
    $('.mobile-handle-container').toggleClass('mobile-menu-show');
    $('.mobile-nav-link').toggleClass('show-element');
    $('.project-modal').removeClass('show-modal');
    $('.screen-overlay').toggleClass('is-visible');
  });

  // Hide mobile menu - overlay click
  $('.screen-overlay').on('click', function(event) {
    event.preventDefault();
    $('.mobile-handle-container').removeClass('mobile-menu-show');
    $('.mobile-nav-link').removeClass('show-element');
    $('.screen-overlay').removeClass('is-visible');
    $('.project-modal').removeClass('show-modal');
    $('.project-modal-media-container').removeClass('show-modal');
  });

  // Show project modal
  $('.js-image-container').on('click', function(event) {
    event.preventDefault();
    var modalId = $(this).attr('id');
    $('.project-modal').addClass('show-modal');
    $('#' + modalId + '-media').addClass('show-modal');
    $('.screen-overlay').addClass('is-visible');
  });

  // Exit project modal
  $('.js-modal-exit').on('click', function(event) {
    event.preventDefault();
    $('.project-modal').removeClass('show-modal');
    $('.project-modal-media-container').removeClass('show-modal');
    $('.screen-overlay').removeClass('is-visible');
  });

  // 'Next' project modal
  $('#js-modal-next').on('click', function(event) {
    event.preventDefault();
    var modalPosition = $('.project-modal-media-container.show-modal').attr('id').charAt(8);
    var modals = $('.project-modal-media-container').length;
    modalPosition++;
    if (modalPosition > modals) {
      modalPosition = 1;
      $('.project-modal-media-container').removeClass('show-modal');
      $('#project-' + modalPosition + '-media').addClass('show-modal');
    } else {
      $('.project-modal-media-container').removeClass('show-modal');
      $('#project-' + modalPosition + '-media').addClass('show-modal');
    };
  });

  // 'Back' project modal
  $('#js-modal-back').on('click', function(event) {
    event.preventDefault();
    var modalPosition = $('.project-modal-media-container.show-modal').attr('id').charAt(8);
    modalPosition--;
    if (modalPosition < 1) {
      modalPosition = 6;
      $('.project-modal-media-container').removeClass('show-modal');
      $('#project-' + modalPosition + '-media').addClass('show-modal');
    } else {
      $('.project-modal-media-container').removeClass('show-modal');
      $('#project-' + modalPosition + '-media').addClass('show-modal');
    };
  });
});
