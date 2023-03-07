/**
 Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math()

 */
// Pedir al usuario las edades y nombres
const edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));
const edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));
const edad3 = parseInt(prompt("Ingrese la edad de la tercera persona:"));
const nombre1 = prompt("Ingrese el nombre de la primera persona:");
const nombre2 = prompt("Ingrese el nombre de la segunda persona:");
const nombre3 = prompt("Ingrese el nombre de la tercera persona:");

// Encontrar la mayor edad
const mayorEdad = Math.max(edad1, edad2, edad3);

// Inicializar la variable para el nombre del mayor
let nombreMayor = "";

// Comprobar cuál es el nombre del mayor
if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

// Mostrar el nombre del mayor
document.write("El nombre del mayor es: " + nombreMayor);
