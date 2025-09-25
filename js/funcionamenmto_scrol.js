const caixas = document.querySelectorAll('.caixa');

caixas.forEach((caixa) => {
  let clicado = false;   
  let startX = 0;        
  let scrollInicial = 0; 
  let pointerId = null;  


  const apertou = (e) => {
    if(e.button && e.button !== 0) return;

    const ignorarTags = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'];
    if(ignorarTags.includes(e.target.tagName)) return;

    e.preventDefault();
    clicado = true;
    pointerId = e.pointerId;
    startX = e.clientX;
    scrollInicial = caixa.scrollLeft;

    try{ caixa.setPointerCapture(pointerId); } catch (err){}

    document.body.style.userSelect = "none";
  };

  const estaClicado = (e) => {
    if(!clicado || e.pointerId !== pointerId) return;
    e.preventDefault();

    const delta = startX - e.clientX;
    const maxScroll = caixa.scrollWidth - caixa.clientWidth;

    let novoScroll = scrollInicial + delta;

    if (novoScroll < 0) novoScroll = 0;
    if (novoScroll > maxScroll) novoScroll = maxScroll;

    caixa.scrollLeft = novoScroll;
  };

  const fimApertou = (e) => {
    if (e && e.pointerId !== undefined && pointerId !== null && e.pointerId !== pointerId) return;
    
    if(!clicado) return
    clicado = false;
    pointerId = null;

    try { caixa.releasePointerCapture && caixa.releasePointerCapture(e ? e.pointerId : null); } catch (err) {}

    document.body.style.userSelect = "";
  };

  caixa.addEventListener('pointerdown', apertou); 
  window.addEventListener('pointermove', estaClicado); 
  window.addEventListener('pointerup', fimApertou);        
  window.addEventListener('pointercancel', fimApertou);
});
