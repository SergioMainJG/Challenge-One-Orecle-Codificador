'use strict'

function botonCodificar() {
  let boton = document.getElementById('encriptar');
  boton.addEventListener('click', codificarTexto());
  boton.addEventListener('click', borrarImg());

}

function codificarTexto() {
  const inputTextarea = document.getElementById('encriptar-text');
  const outputTextarea = document.getElementById('encriptado-text');

  outputTextarea.value = 'Adios, Mundo';
  inputTextarea.value = 'Hola, Mundo';
}

function borrarImg() {
  alert("Che página pendeja");
}