import { baralho, carregarBaralho } from './baralho.js';
import { darCarta } from './dar_carta.js';
import { revelarCartaDealer } from './revela_carta_Dealer.js';

const inicio = document.querySelector(".inicio_jogo_container");
const mesa = document.querySelector(".bJ");
const botaoInicio = document.querySelector(".inicio_jogo");
const pontosDealer = document.getElementById("pontosD");
const pontosPlayer = document.getElementById("pontosP");

let cartaOcultaDealer = null;

pontosDealer.textContent = 0;
pontosPlayer.textContent = 0;

botaoInicio.addEventListener("click", async () => {
  inicio.style.display = "none";
  mesa.style.display = "block";

  await carregarBaralho();



  const carta1 = darCarta('player');
  const carta2 = darCarta('player');
  
  let pontosPlayerTotal = carta1.pontos + carta2.pontos;
  pontosPlayer.textContent = pontosPlayerTotal;

  cartaOcultaDealer = darCarta('dealer', true);

  const cartaVisivelDealer = darCarta('dealer');

  let pontosDealerTotal = cartaVisivelDealer.pontos;
  pontosDealer.textContent = pontosDealerTotal;




  revelarCartaDealer();

});
