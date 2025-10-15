import { baralho } from './baralho.js';

export function darCarta(alvo, oculta = false) {
  if (baralho.length === 0) return;

  const carta = baralho[Math.floor(Math.random() * baralho.length)];
  baralho.splice(baralho.indexOf(carta), 1);

  const campoCartas = document.querySelector(`.campo_cartas[data-alvo="${alvo}"] .cartas`);

  if (!campoCartas) {
    console.warn('Campo de cartas não encontrado para', alvo);
    return;
  }

  const divCarta = document.createElement('div');
  divCarta.classList.add('carta');

  if (oculta) {
    divCarta.style.backgroundImage = `url(./img/carta_verso.png)`;
    divCarta.dataset.valorReal = carta.valor;
    divCarta.dataset.nomeReal = carta.nome;
    divCarta.dataset.imagemReal = carta.imagem;
  } else {
    divCarta.style.backgroundImage = `url(${carta.imagem})`;
  }

  campoCartas.appendChild(divCarta);
  return carta;
}




