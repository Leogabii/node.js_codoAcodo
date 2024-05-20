export function ajustarAnchoFooter(){
    const nav=document.getElementById('nav');
    const footer=document.getElementById('footer');
    // obtengo el ancho del nav
    const anchoNav=nav.offsetWidth;
    footer.style.width={anchoNav}+'px';
}