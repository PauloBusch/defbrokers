$(function() {
  $('.toggle-menu').click(toggleMenu);
  $('.toggle-dropdown').click(toggleDropdown);
  const contact = site.contato;
  updateMenu(contact);
})

function toggleMenu() {
  $('#menu > ul').toggleClass('show');
}

function toggleDropdown(ev) {
  $(ev.currentTarget).closest('li').find('.dropdown').toggleClass('show');
}


function updateMenu(contact){
  const $menu = $('#menu');
  const template = $menu.html()
    .replace('{{ phone }}', contact.telefone);
  $menu.html(template);
}
