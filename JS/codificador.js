'use strict';
/**
 * 
 * 
  La letra "a" es convertida para "ai"
  la letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
 *
 * 
 **/
function codificarTexto() {
  let texto = document.getElementById('encriptar-text');
  let validación = texto.value;
  let patron = /[^a-z\s]/;

  if (patron.test(validación)) {

    alert('El texto ingresado es inválido, solo letras minusculas y espacios');
    let texto1 = document.getElementById('encriptar-text');
    let texto2 = document.getElementById('encriptado-text');

    texto1.value = '';
    texto2.value = '';
  } else {
    const inputTextarea = document.getElementById('encriptar-text');

    let textoModificado = () => {

      let encriptando = inputTextarea.value;
      let textoModificado = '';

      for (let i = 0; i < encriptando.length; i++) {
        switch (encriptando[i]) {
          case 'a':
            textoModificado += 'ai';
            break;
          case 'e':
            textoModificado += 'enter';
            break; 4
          case 'i':
            textoModificado += 'imes';
            break;
          case 'o':
            textoModificado += 'ober';
            break;
          case 'u':
            textoModificado += 'ufat';
            break;
          case ' ':
            textoModificado += ' ';
            break;
          default:
            textoModificado += encriptando[i];
            break;
        }
      }
      return textoModificado;
    };
    let outputTextarea = document.getElementById('encriptado-text');
    outputTextarea.value = textoModificado(inputTextarea.value);
    // document.getElementById('encriptado-text').innerHTML = textoModificado(inputTextarea.value);
  };
}