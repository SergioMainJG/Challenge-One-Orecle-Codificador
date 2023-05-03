'use strict'

function copyText() {
  const outputTextarea = document.getElementById('encriptado-text')
  navigator.clipboard.writeText(outputTextarea.value);
}