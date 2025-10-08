let baralho = [];

fetch('./json/baralho.json')
  .then(res => res.json())
  .then(data => {
    baralho = data;
    mostrarCartaAleatoria(); // chama logo que carrega o JSON
  });

function mostrarCartaAleatoria() {
  if (baralho.length === 0) return;

  // Pega uma carta aleatória
  const carta = baralho[Math.floor(Math.random() * baralho.length)];

  // Seleciona a primeira carta do jogador
  const campoCartas = document.querySelector('.campo_cartas .cartas');
  const img = document.createElement('img');

  img.src = carta.imagem;      // caminho da imagem do JSON
  img.alt = `${carta.valor} de ${carta.naipe}`;
  img.style.width = '100px';   // ajusta o tamanho se quiser
  img.style.margin = '5px';

  campoCartas.appendChild(img);
}
