import { baralho, carregarBaralho } from './baralho.js';
import { darCarta } from './dar_carta.js';
import { revelarCartaDealer } from './revela_carta_Dealer.js';

const pontosDealer = document.getElementById("pontosD");
const pontosPlayer = document.getElementById("pontosP");

let cartaOcultaDealer = null;
let carta1 = null;
let carta2 = null;
let cartaVisivelDealer = null;
let pontosPlayerTotal = 0;
let pontosDealerTotal = 0;

pontosDealer.textContent = 0;
pontosPlayer.textContent = 0;



function esperar(ms) {
    return new Promise(resolve => setTimeout (resolve, ms));
}

function pontuacao(){

    pontosPlayerTotal = 0;
    pontosDealerTotal = 0;

    if(carta1) pontosPlayerTotal += carta1.pontos;
    if(carta2) pontosPlayerTotal += carta2.pontos;
    if(cartaVisivelDealer) pontosDealerTotal += cartaVisivelDealer.pontos;

    pontosPlayer.textContent = pontosPlayerTotal;
    pontosDealer.textContent = pontosDealerTotal;

}

export async function distribuirCartas() {
    
    cartaOcultaDealer = darCarta('dealer', true);
    await esperar(500);
    pontuacao();

    carta1 = darCarta('player');
    await esperar(500);
    pontuacao();
    
    cartaVisivelDealer = darCarta('dealer');
    await esperar(500);
    pontuacao();

    carta2 = darCarta('player');
    await esperar(500);
    pontuacao();

    podeRevelar();

}

function podeRevelar(){
        if(pontosPlayerTotal >= 21 ){
        if(cartaOcultaDealer) {
            pontosDealerTotal = (cartaVisivelDealer ? cartaVisivelDealer.pontos : 0) + cartaOcultaDealer.pontos;
            pontosDealer.textContent = pontosDealerTotal;
        }
        revelarCartaDealer();
    }
}

const campoBotoes = document.querySelector(".campo_botoes");
const b_Parar = document.querySelector(".parar");
const b_MaisUma = document.querySelector(".mais_uma_carta");
const b_Dividir = document.querySelector(".dividir_cartas");
const b_Dobrar = document.querySelector(".dobrar_o_valor");


export function playerDecide(){
    
    b_Parar.disabled = false;
    b_MaisUma.disabled = false;
    b_Dividir.disabled = false;
    b_Dobrar.disabled = false;

    let ligado = false;
    const intervalo = setInterval(() => {
        campoBotoes.style.backgroundColor = ligado
            ? "var(--roxo_itens_carrocel)"
            : "var(--campo_botoes)";
        ligado = !ligado;
    }, 500);

    setTimeout(() => clearInterval(intervalo), 5000);

    b_Parar.onclick = () => {
        b_Parar.disabled = true;
        b_Dividir.disabled = true;
        b_Dobrar.disabled = true;
        b_MaisUma.disabled = true;
        podeRevelar();
    };

    b_MaisUma.onclick = async () => {
        const novaCarta = darCarta('player');
        await esperar(500);
        pontosPlayerTotal += novaCarta.pontos;
        pontosPlayer.textContent = pontosPlayerTotal;

        if (pontosPlayerTotal >= 21) {
            b_Parar.disabled = true;
            b_MaisUma.disabled = true;
            b_Dividir.disabled = true;
            b_Dobrar.disabled = true;
            podeRevelar();
        }
    };
     
}

export function resultadoFinal(){
    
}





