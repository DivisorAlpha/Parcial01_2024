function cambiarTexto(){
    var titulo1=document.getElementById('parrafo').value;
    document.getElementById('parrafo').innerHTML=' ¡Participa en nuestra lotería de premios con cada compra para tener la oportunidad de ganar fabulosos premios, incluyendo vales de gasolina, accesorios para tu carro y mucho más!'
}
//Este es el boton de cambiar pagina
function changeBackgroundColorToRed() {
    // Cambiar el color de fondo del body a rojo
    document.body.style.backgroundColor = 'red';
}
function loadNewPage() {
    // URL de la nueva página
    const newPageUrl = 'iniciarSesion.html';
  
    // Cargar la nueva página en el navegador
    window.location.assign(newPageUrl);
}
function loadNewPage1() {
    // URL de la nueva página
    const newPageUrl = 'registro.html';
  
    // Cargar la nueva página en el navegador
    window.location.assign(newPageUrl);
}

  