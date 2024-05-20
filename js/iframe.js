
//   ********  AJUSTA AUTOMATICAMENTE EL ANCHO DEL IFRAME SEGUN EL VIEWPORT A PARTIR DE LOS 776PX ********

export function adjustIframeWidth(){
    // obtenemos el ancho del viewport
    const viewportWidth=window.innerWidth;
    const viewportHeight=window.innerHeight
    const iframe = document.getElementById('myIframe');
    iframe.style.width=viewportWidth*0.6+'px'
    iframe.style.height=viewportHeight*0.5+'px'
  }
  
// adjustIframeWidth();
  
// window.addEventListener('resize',adjustIframeWidth)