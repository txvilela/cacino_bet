import { carregarBaralho } from './baralho.js';
import { darCarta } from './dar_carta.js';
import { revelarCartaDealer } from './revela_carta_Dealer.js';

const inicio = document.querySelector(".inicio_jogo_container");
const mesa = document.querySelector(".bJ");
const botaoInicio = document.querySelector(".inicio_jogo");

let cartaOcultaDealer = null;

botaoInicio.addEventListener("click", async () => {
  inicio.style.display = "none";
  mesa.style.display = "block";

  await carregarBaralho();


  darCarta('player');
  darCarta('player');

  cartaOcultaDealer = darCarta('dealer', true);

  darCarta('dealer');

  revelarCartaDealer();

});
