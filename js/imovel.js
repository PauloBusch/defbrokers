$(function() {
  const card = getCard();
  initBaner(card);
  initDetail(card);
  initModal();
});

function getCard() {
  const id = getQueryParam(window.location.href, 'id');
  for (const sessao of site.sessoes) {
    for (const card of sessao.cards) 
      if (card.id === id) return card;
  }
}

function initModal() {
  $('.galery img').click(openGalery);
}

function initBaner(card) {
  const renderedBanner = renderBaner(card);
  $('.baner').html(renderedBanner);
}

function initDetail(card) {
  const renderedDetail = renderDetail(card);
  $('.property-content').append(renderedDetail);
}

function openGalery() {
  $('#modal-galery').modal('show'); 
}

function renderBaner(card) {
  return `
    <div class="img" style="background-image: url('assets/images/properties/${card.imagem}');"></div>
    <div class="baner-caption">
      <h5>${card.tipoImovel}</h5>
      <h2>${card.nome}</h2>
      <hr>
      <h4>${card.cidade} - ${card.estadoUf}</h4>
    </div>`; 
}

function renderDetail(card) {
  const { caracteristicas } = card;
  return `
    <div class="property-menu">
      <span>Descrição</span>
      <span>-</span>
      <span>Diferenciais</span>
      <span>-</span>
      <span>Galeria</span>
    </div>
    <div class="row">
      <div class="property-detail">
        <div class="property-header">
          <div>
            <i class="fas fa-home"></i> <span>${caracteristicas.banheiros} e ${caracteristicas.quartos} Qtos</span>
          </div>
          <div>
            <i class="fas fa-chart-area"></i> <span>${caracteristicas.areaConstruida}</span>
          </div>
        </div>
        <h3>Descrição</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.</p>
        <h3>Diferenciais</h3>
        <ul class="differentials">
          <li>Vista Privilegiada</li>
          <li>Espaço Gourmet com Churrasqueira</li>
          <li>Coberturas recebem melhor a luz do dia e ventilação Natural</li>
          <li>Piscina com Deck Molhado e Raia de 20 metros</li>
          <li>Varanda no salão de festas</li>
          <li>Apartamentos com lazer Privativo</li>
        </ul>
        <h3>Galeria</h3>
        <ul class="galery">
          <li><img src="assets/images/slider/slide1.webp"/></li>
          <li><img src="assets/images/slider/slide2.webp"/></li>
          <li><img src="assets/images/slider/slide1.webp"/></li>
          <li><img src="assets/images/slider/slide2.webp"/></li>
        </ul>
      </div>
      <div class="property-asside">
        <h3>Preço de Venda</h3>
        <h4>R$</h4> <h2><strong>${formatPrice(card.preco)}</strong></h2>
        <button>
          <i class="fab fa-whatsapp"></i>
          Falar com um Corretor
        </button>
      </div>
    </div>
  `;
}

function formatPrice(price) {
  return parseFloat(price).toLocaleString();
}
