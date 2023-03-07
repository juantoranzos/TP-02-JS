// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numeros = [];
let suma = 0;
while(true){
    let entrada = prompt("introduce un numero:");
    if (entrada===null){
        //el usuario pulso cancelar
        break;
    }
    let numero=parseFloat(entrada);
    if(isNaN(numero)){
        alert("La entrada no es un numero.")
        continue;
    }
    numeros.push(numero);
}

for(let i = 0; i < numeros.length; i++){
    suma += numeros[i];

}
alert("la suma total de los numeros es:" + suma);