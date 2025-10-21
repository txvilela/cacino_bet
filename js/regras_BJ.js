import { baralho, carregarBaralho } from './baralho.js';
import { darCarta } from './dar_carta.js';
import { revelarCartaDealer } from './revela_carta_Dealer.js';

const pontosDealer = document.getElementById("pontosD");
const pontosPlayer = document.getElementById("pontosP");

let cartaOcultaDealer = null;

pontosDealer.textContent = 0;
pontosPlayer.textContent = 0;


export function distribuirCartas() {
    const carta1 = darCarta('player');
    const carta2 = darCarta('player');

    let pontosPlayerTotal = carta1.pontos + carta2.pontos;
    pontosPlayer.textContent = pontosPlayerTotal;

    cartaOcultaDealer = darCarta('dealer', true);

    const cartaVisivelDealer = darCarta('dealer');

    let pontosDealerTotal = cartaVisivelDealer.pontos;
    pontosDealer.textContent = pontosDealerTotal;


    if(pontosPlayerTotal > 21 ){
        revelarCartaDealer();
    }

}

const campoBotoes = document.querySelector(".campo_botoes");

export function playerDecide(){
    
    let ligado = false;
    const intervalo = setInterval(() => {
        campoBotoes.style.backgroundColor = ligado
            ? "var(--roxo_itens_carrocel)"
            : "var(--campo_botoes)";
        ligado = !ligado;
    }, 500);

    setTimeout(() => clearInterval(intervalo), 5000);
     
}






