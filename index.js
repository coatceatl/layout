$(document).ready(function() {
  $('#nav-toggle').on('click', function(e) {
    e.preventDefault();
    $('#navigation').addClass('nav-menu-mobile');
    $('#menu').addClass('nav-menu-mobile');
    $('#header').addClass('nav-menu-mobile');

  });
});
