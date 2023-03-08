/**
 Realiza un script que cuente el número de vocales que tiene un texto.
 */
 const texto = prompt("ingresa un texto:");
 const vocales = ['a',' e', 'i', 'o', 'u'];
 let contador = 0;
 for(let i = 0; i < texto.length; i++){
    if(vocales.includes(texto[i].toLowerCase())){
        contador++;
    }
 }
 document.write('El texto tiene' + contador + ' vocales.');