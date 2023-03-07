// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let textos = [];

while (true) {
  let texto = prompt("Introduce un texto:");

  if (texto === null) {
    // El usuario ha pulsado "cancelar"
    break;
  }

  textos.push(texto);
}

if (textos.length > 0) {
  let textoConcatenado = textos.join("-");
  document.write(textoConcatenado);
} else {
  document.write("No se ha introducido ningún texto.");
}
