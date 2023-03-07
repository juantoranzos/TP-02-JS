
// Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10



// Variables para contar el número de múltiplos de 4 y 9 encontrados
let countMultiples4 = 0;
let countMultiples9 = 0;

// Iterar a través de los números del 1 al 500
for (let num = 1; num <= 500; num++) {
  let output = num; // Inicializar la salida como el número actual
  
  // Comprobar si el número es un múltiplo de 4 y actualizar la salida en consecuencia
  if (num % 4 === 0) {
    output += " (Múltiplo de 4)";
    countMultiples4++;
  }
  
  // Comprobar si el número es un múltiplo de 9 y actualizar la salida en consecuencia
  if (num % 9 === 0) {
    output += " (Múltiplo de 9)";
    countMultiples9++;
  }
  
  // Escribir el número actual en la consola
  document.write(output);
  
  // Comprobar si se han impreso 5 números y agregar una línea horizontal después
  if (num % 5 === 0) {
   document.write("--------------------------------------------------");
  }
}


// Imprimir el recuento de múltiplos de 4 y 9 encontrados
document.write("Número total de múltiplos de 4 encontrados:" + countMultiples4);
document.write("Número total de múltiplos de 9 encontrados:" + countMultiples9);
