$(function() {
  initSlides(slides);
  initIndicators(slides);
});

function initSlides(slides) {
  const slidesRendered = slides.map(s => renderSlide(s));
  return $('.slider .slides').html(slidesRendered.join(''));
}

function initIndicators(slides) {
  const indicatorsRendered = slides.map(
    s => renderIndicator(slides.indexOf(s) === 0)
  );
  $('.slider .indicators').html(indicatorsRendered.join(''));
}

function renderSlide(slide) {
  return `
    <li>
      <img src="assets/images/slider/${slide.imagem}"/>
      <div class="slider-caption">
        <h5>${slide.titulo}</h5>
        <h2>${slide.subtitulo}</h2>
        <hr>
        <h4>${slide.setor}</h4>
        <h4>${slide.descricao}</h4>
      </div>
    </li>`; 
}

function renderIndicator(active) {
  return `<li class="indicator ${(active ? 'active' : '')}"></li>`; 
}
