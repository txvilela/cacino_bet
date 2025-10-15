export function revelarCartaDealer() {
  // procura a carta virada dentro do campo do dealer
  const cartaVirada = document.querySelector('.campo_cartas[data-alvo="dealer"] .carta[style*="carta_verso.png"]');
  
  if (!cartaVirada) {
    console.warn('Nenhuma carta virada encontrada pro dealer');
    return;
  }

  // troca a imagem de fundo pela imagem real guardada no dataset
  cartaVirada.style.backgroundImage = `url(${cartaVirada.dataset.imagemReal})`;
}