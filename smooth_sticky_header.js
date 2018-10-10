(function ($, Drupal) {
// This code is wrapped for Drupal, but could be used elsewhere.
// Sticky header requires 2 parts
// 1. Clone the header on load.
Drupal.behaviors.cloneHeader = {
  attach: function (context, settings) {
    $(context).find('.site-header').addClass('original').clone().insertAfter('.site-header').addClass('cloned').removeClass('original').hide();
  }
}
// 2. Scroll function for the sticky effect.
$(window).scroll(function () {
  if ($(this).scrollTop() > 700 && !$('body').hasClass('sticky')) {
    $('body').addClass('sticky');
    $('.cloned').slideDown();
  }
  else if ($(this).scrollTop() <= 700) {
    $('body').removeClass('sticky');
    $('.cloned').slideUp();
  }
});

})(jQuery, Drupal);
