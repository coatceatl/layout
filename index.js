$(document).ready(function() {
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#header').toggleClass('nav-menu-mobile');
  });
});
