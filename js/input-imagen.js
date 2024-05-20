//   ********  AJUSTA AUTOMATICAMENTE EL ANCHO DEL IFRAME SEGUN EL VIEWPORT A PARTIR DE LOS 776PX ********

function adjustIframeWidth(){
    // obtenemos el ancho del viewport
    const viewportWidth=window.innerWidth;
    const iframe = document.getElementById('input-imagen');
    iframe.style.width=viewportWidth*0.8+'px'
  }
  
adjustIframeWidth();
  
window.addEventListener('resize',adjustIframeWidth)

