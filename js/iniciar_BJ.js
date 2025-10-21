import { baralho, carregarBaralho } from './baralho.js';
import { darCarta } from './dar_carta.js';
import { revelarCartaDealer } from './revela_carta_Dealer.js';
import { distribuirCartas } from './regras_BJ.js';
import { playerDecide } from './regras_BJ.js';

const inicio = document.querySelector(".inicio_jogo_container");
const mesa = document.querySelector(".bJ");
const botaoInicio = document.querySelector(".inicio_jogo");

botaoInicio.addEventListener("click", async () => {
  inicio.style.display = "none";
  mesa.style.display = "block";

  await carregarBaralho();
  
  distribuirCartas();
  playerDecide();
});
