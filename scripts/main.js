// jQuery
$(document).ready(function() {

  var $root = $('html, body');
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });

  $(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();

       if(Math.abs(lastScrollTop - st) <= delta)
          return;

       if (st > lastScrollTop){
           // downscroll
           $("#header").addClass('hide-header')
       } else {
          // upscroll
          $("#header").removeClass('hide-header');
       }
       lastScrollTop = st;
    });
});

});
