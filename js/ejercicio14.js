/**
  Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

 */
const cadena = prompt("ingrese texto");
let cadenaSeparada = "";
for (let i = 0 ; i < cadena.length; i++) {
    if(i === cadena.length - 1){
        cadenaSeparada += cadena [i];
    }else{
        cadenaSeparada += cadena [i] + "-";
    }
}
document.write("La cadena separada es: " + cadenaSeparada)