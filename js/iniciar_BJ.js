import { carregarBaralho } from './baralho.js';
import { darCarta } from './dar_carta.js';

const inicio = document.querySelector(".inicio_jogo_container");
const mesa = document.querySelector(".bJ");
const botaoInicio = document.querySelector(".inicio_jogo");

botaoInicio.addEventListener("click", async () => {
  inicio.style.display = "none";
  mesa.style.display = "block";

  await carregarBaralho();

  darCarta('player');
  darCarta('player');

  darCarta('dealer');
  darCarta('dealer');
});
