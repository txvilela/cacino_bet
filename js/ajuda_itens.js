const itens = document.querySelectorAll(".itens_carrocel");

itens.forEach((item, i) => {
    let cor = Math.min(i * 30, 255); 
    item.style.backgroundColor = `rgb(42, 14, ${cor})`; 
});