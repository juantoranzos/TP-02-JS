/**
 *  Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */
let usuarioInput = prompt("ingrese un numero entre 1 y 50:");
let piramide = "";
//validar la entrada del usuario
if(usuarioInput < 1 || usuarioInput > 50){
    document.write("El numero ingresado es invalido.");
}else{
    //construir la piramide inversa
    for (let i = usuarioInput; i >= 1; i--){
        for (let j = 0; j < i; j++){
            piramide += i;

        }
        piramide += "/n";
    }
    document.write(piramide)
}
