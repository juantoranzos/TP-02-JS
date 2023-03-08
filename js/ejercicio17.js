/**
 * Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
 */
const texto = prompt("ingrese una cadena de texto");
const posicionVocal = texto.search(/[aeiouAEIOU]/);
document.write(`la posicion de la primera vocal es: ${posicionVocal}`);