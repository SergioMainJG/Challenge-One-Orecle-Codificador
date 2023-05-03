'use strict'

function botonDecodificar() {
  let boton = document.getElementById('desencriptar');
  boton.addEventListener('click', decodificarTexto());
  boton.addEventListener('click', borrarImg());
}

function decodificarTexto() {
  const inputTextarea = document.getElementById('encriptar-text');
  const outputTextarea = document.getElementById('encriptado-text');

  outputTextarea.value = 'Adios, Mundo';
  inputTextarea.value = 'Hola, Mundo'
}

function borrarImg() {
  alert("Che página pendeja")
}