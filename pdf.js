function generarPDF() {

  let  documento = document.getElementById("doc").value;
  let  nombre = document.getElementById("nom").value;
  let  motivo = document.getElementById("mot").value;


  var documentPDF = new jsPDF();
  documentPDF.setFontSize(20);
  documentPDF.text(20, 20, 'Reporte de ventas');
  documentPDF.setFontSize(16);
  documentPDF.text(20, 30, 'fecha: ' + new Date());
  documentPDF.setFontSize(12);
  documentPDF.text(20, 40, 'perro: ' + vegetariana);
  documentPDF.text(20, 40, 'perro: ' + ranchero);
  documentPDF.text(20, 40, 'perro: ' + mixto);
  documentPDF.text(20, 50, 'bebida: ' + jugo);
  documentPDF.text(20, 60, 'nombre: ' + nombre);
  documentPDF.text(20, 70, 'direccion: ' + direccion);
  documentPDF.save("reporte");
}

