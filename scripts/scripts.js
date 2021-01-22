/* Ideas por hacer:
  - Filtrar proyectos por categoría seleccionada
  - Formulario de enviar mensaje a enviar un correo
  - Ir al perfil al seleccionar Jeanniffer Pimentel
  - Crear hover de los botones
  - Arreglar detalles de diagramación
  - Agregar og:tags
  - Else si no tiene nada o validacion
*/

// Selector de pantallas
const pantallaInicio = document.getElementById("contenedor");
const pantallaBandeja = document.getElementById("bandeja");
const responsive = document.getElementById("responsive");

const saltar = document.getElementById("siguiente");
const textoInicial = document.getElementById("texto-uno");
const nombreEspectador = document.getElementById("nombre");
//const campoTexto = document.getElementById("nombre");
/* Selección de correos electrónicos */
const selecUno = document.getElementById("selecUno");
const selecDos = document.getElementById("selecDos");
const selecTres = document.getElementById("selecTres");
const selecCuatro = document.getElementById("selecCuatro");
const selecCinco = document.getElementById("selecCinco");
const selecSeis = document.getElementById("selecSeis");
const selecSiete = document.getElementById("selecSiete");
const selecOcho = document.getElementById("selecOcho");
const selecNueve = document.getElementById("selecNueve");

/* Muestra de correo relacionado */
const textoUno = document.getElementById("texto-uno");
const textoDos = document.getElementById("texto-dos");
const textoTres = document.getElementById("texto-tres");
const textoCuatro = document.getElementById("texto-cuatro");
const textoCinco = document.getElementById("texto-cinco");
const textoSeis = document.getElementById("texto-seis");
const textoSiete = document.getElementById("texto-siete");
const textoOcho = document.getElementById("texto-ocho");
const textoNueve = document.getElementById("texto-nueve");

function iniciar() {
  pantallaTelefono();
}

function pantallaTelefono() {
  const w = document.documentElement.clientWidth;

  if (w <= 800) {
    pantallaInicio.style.display = "none";
    responsive.style.display = "block";
  } else {
    pantallaInicio.style.display = "block";
    responsive.style.display = "none";
  }
}

window.addEventListener("resize", pantallaTelefono);
//pantallaTelefono();
window.onload = iniciar;

/* Cambiar nombre del espectador en la bandeja de entrada */
function espectador() {
  const nombreEspectador = document.getElementById("nombre").value;
  console.log(nombreEspectador);
  document.getElementById("espectador").innerHTML = `${nombreEspectador}`;
}

/* Al iniciar no muestra esta serie de etiquetas */
pantallaBandeja.style.display = "none";
saltar.setAttribute("align", "center");
textoUno.style.display = "none";
textoDos.style.display = "none";
textoTres.style.display = "none";
textoCuatro.style.display = "none";
textoCinco.style.display = "none";
textoSeis.style.display = "none";
textoSiete.style.display = "none";
textoOcho.style.display = "none";
textoNueve.style.display = "none";

/* Al hacer click desaparece la primera pantalla y muestra la bandeja, ejecuta la función espectador*/
saltar.onclick = () => {
  pantallaInicio.style.display = "none";
  pantallaBandeja.style.display = "block";
  document.title = "Bandeja de Entrada";
  espectador();
};

nombreEspectador.addEventListener("keyup", function (apretar) {
  if (apretar.key === "Enter") {
    pantallaInicio.style.display = "none";
    pantallaBandeja.style.display = "block";
    document.title = "Bandeja de Entrada";
    espectador();
  }
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
})

function cambio(seleccion) {
  ocultar();
  const elemento = document.getElementById(seleccion);
  elemento.style.display = "block";
}

selecUno.onclick = function () {
  cambio("texto-uno");
};
selecDos.onclick = function () {
  cambio("texto-dos");
};
selecTres.onclick = function () {
  cambio("texto-tres");
};
selecCuatro.onclick = function () {
  cambio("texto-cuatro");
};
selecCinco.onclick = function () {
  cambio("texto-cinco");
};
selecSeis.onclick = function () {
  cambio("texto-seis");
};

function ocultar() {
  textoUno.style.display = "none";
  textoDos.style.display = "none";
  textoTres.style.display = "none";
  textoCuatro.style.display = "none";
  textoCinco.style.display = "none";
  textoSeis.style.display = "none";
  textoSiete.style.display = "none";
  textoOcho.style.display = "none";
  textoNueve.style.display = "none";
}

saltar.onclick = saltar.onclick;
