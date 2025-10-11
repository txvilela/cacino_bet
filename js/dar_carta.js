let baralho = [];

fetch('./json/baralho.json')
  .then(res => res.json())
  .then(data => {
    baralho = data;
    darCarta('player'); 
    darCarta('dealer');
    darCarta('player'); 
    darCarta('dealer');



});

function darCarta(alvo) {
  if (baralho.length === 0) return;

  const carta = baralho[Math.floor(Math.random() * baralho.length)];

  const campoCartas = document.querySelector(`.campo_cartas[data-alvo="${alvo}"] .cartas`);
  if (!campoCartas) {
    console.warn('Campo de cartas não encontrado para', alvo);
    return;
  }


  const divCarta = document.createElement('div');
  divCarta.classList.add('carta');
  divCarta.style.backgroundImage = `url(${carta.imagem})`;

  campoCartas.appendChild(divCarta);
}



