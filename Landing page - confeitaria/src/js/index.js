document.addEventListener('DOMContentLoaded', function () {
  // Seletor do carousel
  const carousel = document.getElementById('carousel-depoimentos');

  // Seletor da área interna do carousel
  const slideInner = document.querySelector('.slide-inner');

  // Tempo de transição em milissegundos
  const transitionTime = 500;

  // Intervalo de tempo entre os slides em milissegundos
  const intervalTime = 5000;

  // Função para mover os slides para a esquerda
  function moveLeft() {
    const firstSlide = slideInner.children[0];
    slideInner.style.transition = `transform ${transitionTime}ms ease-in-out`;
    slideInner.style.transform = `translateX(-${firstSlide.offsetWidth}px)`;

    // Mover o primeiro slide para o final
    setTimeout(() => {
      slideInner.style.transition = 'none';
      slideInner.style.transform = 'translateX(0)';
      slideInner.appendChild(firstSlide);
    }, transitionTime);
  }

  // Função para iniciar o carousel
  function startCarousel() {
    setInterval(moveLeft, intervalTime);
  }

  // Iniciar o carousel quando a página for carregada completamente
  startCarousel();
});