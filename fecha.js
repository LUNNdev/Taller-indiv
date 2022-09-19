function fecha() {
  let fechaInicio= new Date(document.getElementById("ini").value);
  let fechaFin = new  Date(document.getElementById("fin").value);
  if (fechaInicio>fechaFin) {
    alert("No es una fecha valida")
    fechaInicio.value= ""
    fechaFin.value= ""
  }
  let resta = fechaFin.getTime() - fechaInicio.getTime();
}