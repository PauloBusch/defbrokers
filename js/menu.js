$(function() {
  $('.toggle-menu').click(toggleMenu);
  $('.toggle-dropdown').click(toggleDropdown);
})

function toggleMenu() {
  $('#menu > ul').toggleClass('show');
}

function toggleDropdown(ev) {
  $(ev.currentTarget).closest('li').find('.dropdown').toggleClass('show');
}
