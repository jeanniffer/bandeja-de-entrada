/* Ideas por hacer:
  - Que el input de la primera página sea una variable que cambie el titulo  de la segunda pagina con innerhtml

*/

// Selector de pantallas
const pantallaInicio = document.getElementById("contenedor");
const pantallaBandeja = document.getElementById("bandeja");

const saltar = document.getElementById("siguiente");
const textoInicial = document.getElementById("blog-container");
//const nombreEspectador = document.getElementById("nombre").value;;
const primeraEntrada = document.getElementById("selecUno");

function espectador() {
  const nombreEspectador = document.getElementById("nombre").value;
  console.log(nombreEspectador)
  document.getElementById("espectador").innerHTML = `${nombreEspectador}`;
}

pantallaBandeja.style.display = "none";
saltar.setAttribute("align", "center");
textoInicial.style.display = "none";

saltar.onclick = () => {
  pantallaInicio.style.display = "none";
  pantallaBandeja.style.display = "block";
  document.title = "Bandeja de Entrada";
  espectador();
};

primeraEntrada.onclick = () => {
  textoInicial.style.display = "block";
};
