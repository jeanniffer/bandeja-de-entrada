/* Ideas por hacer:

*/

// Selector de pantallas
const pantallaInicio = document.getElementById("contenedor");
const pantallaBandeja = document.getElementById("bandeja");

const saltar = document.getElementById("siguiente");
const textoInicial = document.getElementById("texto-uno");
const nombreEspectador = document.getElementById("nombre").value;

const selecUno = document.getElementById("selecUno");
const selecDos = document.getElementById("selecDos");
const selecTres = document.getElementById("selecTres");
const selecCuatro = document.getElementById("selecCuatro");
const selecCinco = document.getElementById("selecCinco");
const selecSeis = document.getElementById("selecSeis");
const selecSiete = document.getElementById("selecSiete");
const selecOcho = document.getElementById("selecOcho");
const selecNueve = document.getElementById("selecNueve");

const textoUno = document.getElementById("texto-uno");
const textoDos = document.getElementById("texto-dos");
const textoTres = document.getElementById("texto-tres");
const textoCuatro = document.getElementById("texto-cuatro");
const textoCinco = document.getElementById("texto-cinco");
const textoSeis = document.getElementById("texto-seis");
const textoSiete = document.getElementById("texto-siete");
const textoOcho = document.getElementById("texto-ocho");
const textoNueve = document.getElementById("texto-nueve");
//const primeraEntrada = document.getElementById("selecUno");

function espectador() {
  const nombreEspectador = document.getElementById("nombre").value;
  console.log(nombreEspectador);
  document.getElementById("espectador").innerHTML = `${nombreEspectador}`;
}

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

saltar.onclick = () => {
  pantallaInicio.style.display = "none";
  pantallaBandeja.style.display = "block";
  document.title = "Bandeja de Entrada";
  espectador();
};

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
selecSiete.onclick = function () {
  cambio("texto-siete");
};
selecOcho.onclick = function () {
  cambio("texto-ocho");
};
selecNueve.onclick = function () {
  cambio("texto-nueve");
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
