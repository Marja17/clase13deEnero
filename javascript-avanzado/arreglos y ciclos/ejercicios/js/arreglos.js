/*Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.
*/

const arreglo = [ 34, 24, 56, 78, 94, 34, 17, 39, 67, 39, 67, 38, 89, 56, 10, 89, 58, 90, 26, 40] ;
let sum = 0;

for (let i = 0; i < arreglo.length; i++) {
    sum += arreglo[i];
}

document.write( `El arreglo es:  ${arreglo} <br/>`)

document.write( `La suma es:  ${sum} <br/>`)

document.write( `El promedio es:  ${sum / arreglo.length} <br/> `)

