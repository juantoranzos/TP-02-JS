/**
 
Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


 */

// Pedir al usuario el número de filas y columnas
const numFilas = parseInt(prompt("Ingrese el número de filas:"));
const numColumnas = parseInt(prompt("Ingrese el número de columnas:"));

// Calcular el número total de celdas
const numCeldas = numFilas * numColumnas;

// Inicializar un contador para los números
let contador = numCeldas;

// Crear la tabla
document.write("<table>");

// Iterar a través de las filas
for (let i = 0; i < numFilas; i++) {
  document.write("<tr>");
  
  // Iterar a través de las columnas
  for (let j = 0; j < numColumnas; j++) {
    // Escribir el número actual en la celda
    document.write("<td>" + contador + "</td>");
    
    // Decrementar el contador
    contador--;
  }
  
  document.write("</tr>");
}

document.write("</table>");
