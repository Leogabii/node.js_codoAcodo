import { adjustIframeWidth } from './iframe.js';
import { ajustarAnchoFooter } from './footer.js';

function print(imprimir){
  console.log(imprimir)
}  
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const motivo = document.getElementById("motivo");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("formulario");
const iframe = document.getElementById('iframe')
const footer = document.getElementById('footer')

function verificarImagen(input) {
  var file = input.files[0];
  if (file) {
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i; // Expresión regular para permitir solo jpg y png
    let label = document.getElementById("subir-imagen");
    if (!allowedExtensions.exec(file.name)) {
      console.error("Formato de archivo no válido. Solo se permiten archivos JPG o PNG.");
      input.value = ""; // Limpiar el campo de archivo seleccionado
      label.style.fontWeight = "normal"; // Cambia el estilo del label
      label.style.color = "red";
      label.textContent = "Solo se permiten archivos JPG o PNG";
      return;
    }

    var fileSize = file.size; // Tamaño de la imagen en bytes
    var maxSize = 50 * 1024 * 1024; // Tamaño máximo (50 MB)

    if (fileSize <= maxSize) {
      console.log("La imagen se ha cargado correctamente.");
      label.textContent = "Subir imagen(hasta 50 Mb):"; // Restaura el contenido por defecto del label al hacer clic en él
      label.style.fontWeight = "bold"; // Restaura el estilo por defecto del label al hacer clic en él
      label.style.color = "black";
    } else {
      console.error("La imagen supera el tamaño máximo permitido (50 MB).");
      label.textContent = "La imagen supera el tamaño máximo permitido (50 MB)";
      label.style.fontWeight = "normal"; // Cambia el estilo del label
      label.style.color = "red";
      input.value = "";
    }
  }
}
  
document.addEventListener('DOMContentLoaded', () => {
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault()
      if (nombre.value.length === 0) {
        console.log("Nombre vacio")
        document.getElementById("nombre-required").style.display = 'block';
      } else {
        document.getElementById("nombre-required").style.display = 'none';
      }
      if (email.value.length === 0) {
        console.log("Campo email esta vacío");
        document.getElementById("email-required").style.display = 'block';
      } else {
        document.getElementById("email-required").style.display = 'none';
      } if (apellido.value.length === 0) {
        console.log("El campo apellido esta vacio")
        document.getElementById("apellido-required").style.display = 'block';
      } else {
        document.getElementById("apellido-required").style.display = 'none';
      } if (!document.getElementById("acuerdo").checked) {
        console.log("Acepte el acuerdo de privacidad")
        document.getElementById("acuerdo-required").style.display = 'block';
      } else {
        document.getElementById("acuerdo-required").style.display = 'none';
      } if (motivo.value === "") {
        document.getElementById("motivo-required").style.display = 'block';
      } else {
        document.getElementById("motivo-required").style.display = 'none';
      } if (mensaje.value.length === 0) {
        document.getElementById("mensaje-required").style.display = 'block';
      } else {
        document.getElementById("mensaje-required").style.display = 'none';
      }
    });

  }
});



function toggleLogo() {
  var logo = document.getElementById("logo");
  logo.classList.toggle("hide-on-small");
}

function toggleCart() {
  var cart = document.querySelector('.carrito');
  cart.classList.toggle('move-with-menu');
}

// ajusta el iframe
if (iframe) {
  adjustIframeWidth();

  window.addEventListener('resize', adjustIframeWidth)
}
// mantiene el mismo ancho en el footer como el que tiene el nav
if (footer) {
  window.addEventListener('load', ajustarAnchoFooter);

  window.addEventListener('resize', ajustarAnchoFooter);
}

