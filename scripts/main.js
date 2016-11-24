// jQuery
$(document).ready(function () {
  $('.js-input').on('click', function(event) {
    event.preventDefault();
    $('.js-input').each(function() {
      if ($(this).val() != "") {
        return false;
      } else if ($(this).prev('.js-label').hasClass('move-label')) {
        $(this).prev('.js-label').removeClass('move-label');
      } else {
        $(this).prev('.js-label').addClass('move-label');
      };
    });
  });
});


//for(var i = 0, x = $('.js-input').length; i < x; i++) {
//  if ($(this).val()) {
