$(function() {
  const sections = site.sessoes;
  initSections(sections);
});

function initSections(sections) {
  const renderedSections = renderSections(sections);
  $('.custom-section').remove();
  $('.push-sessoes').after(renderedSections);
}

function renderSections(sections) {
  return sections.map(s => renderSection(s)).join('');
}

function renderSection(section) {
  const cardsRendered = renderCards(section.cards);
  return `
    <section class="custom-section">
      <h2>${section.titulo}</h2>
      ${cardsRendered}
    </section>`;
}

function renderCards(cards) {
  const cardsRendered = cards.map(c => renderCard(c)).join('');
  return `<ul class="properties">${cardsRendered}</ul>`;
}

function renderCard(card) {
  const { caracteristicas } = card;
  return `
    <li class="property">
      <div class="img" style="background-image: url('assets/images/properties/${card.imagem}');"></div>
      <div class="detail">
        <h3>${card.tipoImovel}</h3>
        <h2>${card.nome}</h2>
        <h4>${card.cidade} - ${card.estadoUf}</h4>
        <br/>
        <h3>${card.tipo}</h3>
        <div class="price">
          <h4>R$</h4> <h2><strong>${formatPrice(card.preco)}</strong></h2>
        </div>
      </div>
      <div class="caracteristics">
        <span><i class="fas fa-check"></i> <h5><strong>${caracteristicas.quartos}</strong> quartos</h5></span>
        <span><i class="fas fa-check"></i> <h5><strong>${caracteristicas.banheiros}</strong> banheiros</h5></span>
        <span><i class="fas fa-check"></i> <h5><strong>${caracteristicas.vagasGaragem}</strong> vagas na garagem</h5></span>
        <span><i class="fas fa-check"></i> <h5><strong>${caracteristicas.areaConstruida}</strong> área construída</h5></span>
      </div>
    </li>`;
}

function formatPrice(price) {
  return parseFloat(price).toLocaleString();
}
