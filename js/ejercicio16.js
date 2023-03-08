/**
 *  Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

 */
const texto = prompt('ingresa una cadena de texto');
const textoAlReves = texto.split("").reverse().join("");
document.write(textoAlReves);

