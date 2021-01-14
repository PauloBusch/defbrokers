$(function() {
  const contact = site.contato;
  updateContact(contact);
  updateCopyright();
});

function updateContact(contact){
  const $contact = $('.contact');
  const template = $contact.html()
    .replace('{{ phone }}', contact.telefone)
    .replace('{{ email }}', contact.email);
  $contact.html(template);
}

function updateCopyright() {
  const $copyright = $('.copyright');
  const fullYear = new Date().getFullYear();
  const template = $copyright.html()
    .replace('{{ year }}', fullYear);
  $copyright.html(template);
}
