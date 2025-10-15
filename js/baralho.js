export let baralho = [];

export async function carregarBaralho() {
  const res = await fetch('./json/baralho.json');
  if (!res.ok) throw new Error('Falha ao carregar baralho: ' + res.status);
  baralho = await res.json();
}
