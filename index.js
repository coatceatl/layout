$(document).ready(function() {
  $('#nav-toggle').on('click', function(e) {
    e.preventDefault();

    if($('#header').hasClass('nav-menu-mobile') ) {
      $('#header').removeClass('nav-menu-mobile');
    } else {
      $('#header').addClass('nav-menu-mobile');
    }
  });
});
