// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt('Ingrese su edad:');
if(isNaN(edad)){
    document.write('Los datos ingresados son incorrectos')
} else if(edad>=18) {
    document.write('Ya puedes conducir')

}else{
    document.write('Lo siento, aun no puedes conducir')
}