let numeros = [1 , 34 ,56 ,78, 123 , 123, 567, 345, 987];

/*numeros.forEach ( elemento => {
document.write (elemento + ' , ');
});*/ 

//ForEach recorre todos los elementos de un arreglo

numeros.forEach (function (elemento, indice){
    document.write (elemento + '-' + indice + '<br>');
    });

//Map crea un nuevo arreglo 

let numeros2 = numeros.map (function (elemento){
    return elemento * 2;
});

document.write('<br>' + numeros2 + '<br>');

/*let frutas = ['mangos', 'uva', 'piña'];
let frutas2 = frutas;

document.write ('<br>'+ frutas+ '<br>');
document.write ('<br>'+ frutas2+ '<br>');

frutas2.push('pera')
document.write ('<br>'+ frutas+ '<br>');
document.write ('<br>'+ frutas2+ '<br>');*/

let frutas = ['mangos', 'uva', 'piña'];
let frutas2 = frutas.map(function (elementos) {
    return elementos;
});

document.write ('<br>'+ frutas+ '<br>');
document.write ('<br>'+ frutas2+ '<br>');

frutas2.push('pera')
document.write ('<br>'+ frutas+ '<br>');
document.write ('<br>'+ frutas2+ '<br>');

/* Includes si está el elemento ene el arreglo */

document.write ( '<br>' + numeros.includes (123) + '<br>' )

// Filter, filtra los elementos de un arreglo 
let numerosPares = numeros.filter ((elemento) => {
   /* if ( elemento % 2 == 0){
        return true;
    } else {
        return false;
    }
  /*  console.log (elemento % 2 == 0)
 return elemento % 2 == 0*/
 if (elemento > 10){
     return true;

 }

}); 
document.write ('<br>'+  numerosPares + '<br>')

let frutastropicales = ['mangos', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate'];

let frutasFiltro = frutastropicales.filter((fruta) =>{
    /*if (fruta.includes('i') == true){
        return true;
    }*/
    //return fruta.includes ('m')
    return fruta.toLocaleLowerCase ().includes('m')
});

document.write('<br>' + frutasFiltro + '<br>')

//Sort ordena los elementos
let otrodNumeros = [9, 2 , 3, 5, 1, 4, 8, 6, 7  ]
//document.write('<br>'  + numeros.sort() + '<br>');

//reverse

document.write('<br>' + numeros.reverse() + '<br>'  )

// find solo regresa un elemento

let frutasEncontrada = frutastropicales.find((elemento) =>{
    return elemento.toLocaleLowerCase().includes ('manzana');
}) 

document.write ('<br>' + frutasEncontrada + '<br>')