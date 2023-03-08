// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let userInput = prompt("Ingrese un número entre 1 y 50:");
let piramide = "";

// Validar la entrada del usuario
if (userInput < 1 || userInput > 50) {
  document.write("El número ingresado es inválido.");
} else {
  // Construir la pirámide
  for (let i = 1; i <= userInput; i++) {
    for (let j = 1; j <= i; j++) {
      piramide += j;
    }
    piramide += "\n";
  }

  document.write(piramide);
}
