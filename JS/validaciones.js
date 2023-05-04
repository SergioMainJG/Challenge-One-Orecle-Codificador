'use strict'

function validarEscritura() {

  let texto = document.getElementById('encriptar-text');
  let validación = texto.value;
  let patron = /[a-z\s]/;

  if (patron.test(validación)) {

    alert('El texto ingresado es válido');
  } else {
    alert('El texto ingresado no es válido');
  }

}