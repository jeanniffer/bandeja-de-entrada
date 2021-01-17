const pantallaInicio = document.getElementById("contenedor");
const pantallaBandeja = document.getElementById("bandeja")

pantallaBandeja.style.display = "none";


function esconderInicio() {
  pantallaInicio.style.display = "none";
  pantallaBandeja.style.display = "block";
}