'use strict';

function decodificarTexto() {

  let texto = document.getElementById('encriptar-text');
  let validación = texto.value;
  let patron = /[^a-z\s]/;

  if (patron.test(validación)) {

    alert('El texto ingresado es inválido');
    let texto1 = document.getElementById('encriptar-text');
    let texto2 = document.getElementById('encriptado-text');

    texto1.value = '';
    texto2.value = '';
  } else {
    const inputTextarea = document.getElementById('encriptar-text');

    let textoModificado = () => {
      let desencriptando = inputTextarea.value;
      let textoModificado = '';

      for (let i = 0; i < desencriptando.length; i++) {
        if (desencriptando[i] === 'a' && desencriptando[i + 1] === 'i') {
          textoModificado += 'a';
          i++;
        } else if (desencriptando.substring(i, i + 5) === 'enter') {
          textoModificado += 'e';
          i += 4;
        } else if (desencriptando.substring(i, i + 4) === 'imes') {
          textoModificado += 'i';
          i += 3;
        } else if (desencriptando.substring(i, i + 4) === 'ober') {
          textoModificado += 'o';
          i += 3;
        } else if (desencriptando.substring(i, i + 4) === 'ufat') {
          textoModificado += 'u';
          i += 3;
        } else if (desencriptando.substring(i) === ' ') {
          textoModificado += ' ';
        } else {
          textoModificado += desencriptando[i];
        }
      }
      return textoModificado;
    };

    let outputTextarea = document.getElementById('encriptado-text');
    outputTextarea.value = textoModificado(inputTextarea.value);
    // document.getElementById('encriptado-text').innerHTML = textoModificado(inputTextarea.value);
  }

}