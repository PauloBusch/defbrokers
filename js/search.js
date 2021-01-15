$(function () {
  initSearch();
});

function initSearch() {
  $('#form-search').submit(searchProperties);
}

function searchProperties(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  const $form = $('#form-search');
  const rawType = $form.find('[name="type"]').val();
  const rawStartValue = $form.find('[name="startValue"]').val();
  const rawEndValue = $form.find('[name="endValue"]').val();
  const type = rawType.toLowerCase();
  const startValue = rawStartValue ? parseInt(rawStartValue) : null;
  const endValue = rawEndValue ? parseInt(rawEndValue) : null;
  const sections = filterSections(site.sessoes, { type, startValue, endValue });
  initSections(sections);
}

function filterSections(sections, filter) {
  const filtred = [];
  for (const section of sections) {
    const cards = filterCards(section.cards, filter);
    if (cards.length === 0) continue;
    const cloneSection = Object.assign(new Object(), section);
    cloneSection.cards = cards;
    filtred.push(cloneSection);
  }
  return filtred;
}

function filterCards(cards, filter) {
    return cards.filter(card => {
        return card.tipo.toLowerCase() === filter.type 
          && (!filter.startValue || card.preco >= filter.startValue)
          && (!filter.endValue || card.preco <= filter.endValue);
    });
}
