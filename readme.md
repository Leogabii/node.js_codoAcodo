# ENTREGA TPO FRONTEND

## Tabla de Contenido
***
- [Entrega TPO FrontEnd](#ENTREGA TPO FRONTEND)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Descripción](#descripción)
  - [Tecnologías ocupadas](#tecnologías-ocupadas)
  - [Animaciones usadas y Js](#animaciones-usadas-y-js)
  - [Nombre del Grupo](#nombre-del-grupo)


 ## Descripción
 ***
 Se trata de una pagina web sobre una Tienda Ecommerce de venta de ropa.

 - Se puede ir entrando a cada pagina desde una barra de menu donde puede ver la Productos, Nosotros y Contacto.
 - Tambien se puede ingresar a un formulario de contactos para dejar sus datos.
 -  Se utilizan las siguientes tecnologías: HTML, CSS y Bootstrap para la estructura y diseño de la interfaz(lo minimo necesario solo para probarlo como funciona). JavaScript para la validacion de datos del formulario y algunas funciones que se crearon para el aprendizaje.

 ## Tecnologías ocupadas
 ***
    1. HTML
    2. CSS
    3. JS
   
 ## Animaciones, Transformaciones y Transiciones usadas y Js
 ***
    Podemos describir los siguientes puntos requeridos y complimentados:
    
        1. El sitio web debe poseer al menos 4 páginas HTML o 4 secciones si se trata de un sitio One Page.
            a. Hemos realizado 4 paginas las cuales son (Index,Nosotros,Contacto,carrito) y una seccion productos
        2. El sitio web debe incluir un formulario de contacto, con al menos 5 campos que incluya (un   checkbox o radiobutton), un select y una imagen, con validación realizada mediante JavaScript para que los campos sean obligatorios.
            a. Se puede observar que hemos creado la pagina contacto que abarca lo solicitado
        3. Tener al menos una página totalmente responsive con mínimo 3 puntos de corte con media queries para 3 tamaños de dispositivos (PC escritorio, Tablet, Celular). Para el diseño debe usarse CSS.
            a. Hemos desarrollado todas las paginas responsive donde podemos visualizar que en el CSS se an con figurado las mediaQuery para cada ancho del viewport segun el dispositivo a renderizar
            Un ejemplo: 
            @media (min-width: 768px) {
               #card-jeans .card-body, #card-chomba .card-body, #card-remera .card-body {  min-height: 17rem; }
               .carousel-item>img{
               max-width: 100svw;max-height: 100svh;} 
            }
         4. Utilizar al menos una animación, transformación o una transición.
            a. Utilizamos transformaciones:
               1. @-webkit-keyframes scroll
               2. @keyframes scroll
            b. Utilizamos transiciones:
               1.   #myIframe{
                      transition: 0.5s;
                     }
            c. Animaciones:
               .slider .slide-track {
                  -webkit-animation: scroll 40s linear infinite;
                        animation: scroll 40s linear infinite;
                  display: flex;
                  width: calc(100px * 28);
                  }
         5.  Poseer una estructura HTML maquetada con Flexbox y/o Grid.
            a. Untilizamos Flex
         6.  Se considerará la presentación general del proyecto, la legibilidad del mismo, la
             navegación sin llegar a puntos de no retorno, la optimización de imágenes para la
             web y el uso de favicon.
            a. Cumplementado
         7.  El trabajo práctico deberá subirse a un servidor online y compartirse mediante
             un repositorio de Git. (Mandatorio)
            a. https://github.com/Leogabii/node.js_codoAcodo
         8. La página deberá subirse a un servidor on-line para poder ser navegada por el
            Docente. Ejemplo: Netlify, Vercel, GitHub Pages o similares. (Mandatorio)
            a. https://tienda-nodejs.netlify.app
         9. El sitio web debe estar estructurado utilizando etiquetas semánticas HTML
            correctamente. Debe pasar la validación de https://validator.w3.org/ sin errores.
            a.
         10. Utilizar iframes y/o íconos de FontAwesome y/o fuentes locales o bien de Google
             Fonts.Es optativo incluir algún elemento de Bootstrap.
             a. Se utilizan distintos iframe, como iconos y fuentes

 ## Nombre del Grupo
 ***
 Grupo N° 2
 Comision N° 24133
 Full Stack NodeJS*