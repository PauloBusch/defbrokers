$(function() {
  const slides = site.slides.lista;
  initSlides(slides);
  initIndicators(slides);
  configureAnimation();
});

function initSlides(slides) {
  const slidesRendered = slides.map(
    s => renderSlide(s, slides.indexOf(s) === 0)
  );
  const $slides = $('.slider .slides');
  const width = `${(slides.length * 100)}%`;
  $slides.html(slidesRendered.join(''));
  $slides.css('width', width);
}

function initIndicators(slides) {
  const indicatorsRendered = slides.map(
    s => renderIndicator(slides.indexOf(s) === 0)
  );
  $('.slider .indicators').html(indicatorsRendered.join(''));
}

function renderSlide(slide, active) {
  return `
    <li class="slide ${(active ? 'active' : '')}">
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
  return `
    <li 
      class="indicator ${(active ? 'active' : '')}"
      onclick="goSlide(this)">
    </li>`; 
}

var animationId;

function configureAnimation() {
  if (animationId) clearInterval(animationId);
  animationId = setInterval(updateAnimation, site.slides.duracao);
}

function updateAnimation() {
  const direction = $('.indicators').attr('direction') || 'next';
  if (direction === 'next') nextSlide();
  if (direction === 'prev') prevSlide();
}

function prevSlide(manual) {
  const $currentSlide = $('.slide.active');
  const isFirst = $currentSlide.is(':first-child');
  if (isFirst) return; 
  $currentSlide.removeClass('active');
  $currentSlide.prev().addClass('active');
  if (manual) configureAnimation();
  updateSlide();
}

function nextSlide(manual) {
  const $currentSlide = $('.slide.active');
  const isLast = $currentSlide.is(':last-child');
  if (isLast) return; 
  $currentSlide.removeClass('active');
  $currentSlide.next().addClass('active');
  if (manual) configureAnimation();
  updateSlide();
}

function goSlide(indicator) {
  const $indicator = $(indicator);
  const $slides = $('.slide');
  const $indicators = $('.indicator');
  const indicatorIndex = $indicators.index(indicator);
  const $slide = $slides.eq(indicatorIndex);

  $indicators.removeClass('active');
  $slides.removeClass('active');
  
  $indicator.addClass('active');
  $slide.addClass('active');

  configureAnimation();
  updateSlide();
}

function updateSlide() {
  const $slides = $('.slide');
  const $currentSlide = $slides.filter('.active');
  const currentSlideIndex = $slides.index($currentSlide);
  $('.slides').css('margin-left', `-${currentSlideIndex * 100}%`);
  
  updateIndicator();
  updateDirection();
  updateButtons();
}

function updateIndicator() {
  const $slides = $('.slide');
  const $indicators = $('.indicator');
  const $currentSlide = $slides.filter('.active');
  const currentSlideIndex = $slides.index($currentSlide);
  $indicators.removeClass('active');
  $indicators.eq(currentSlideIndex).addClass('active');
}

function updateDirection() {
  const $currentSlide = $('.slide.active');
  const isFirst = $currentSlide.is(':first-child');
  const isLast = $currentSlide.is(':last-child');
  if (isLast) $('.indicators').attr('direction', 'prev');
  if (isFirst) $('.indicators').attr('direction', 'next');
}

function updateButtons() {
  const $currentSlide = $('.slide.active');
  const isFirst = $currentSlide.is(':first-child');
  const isLast = $currentSlide.is(':last-child');
  $('.actions .prev').toggleClass('disabled', isFirst);
  $('.actions .next').toggleClass('disabled', isLast);
}
