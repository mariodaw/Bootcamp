
let bool1 = true;
let bool2 = false;
let booleanoAnd = bool1 && bool2;
let boolOr = bool1 || bool2;
let boolNot = !bool1;
let booleanoMix0 = (bool1 || bool2) && (bool1 || (!bool1 && !bool2));
console.log(booleanoMix0);

let valorDivision = 17 / 3 ;
console.log(valorDivision.toFixed(2)); 
let valorResto = 17 % 7 ;
console.log(valorResto);

// Crea una variable A cuyo valor sea el número 9, y después crea una variable B cuyo valor sea un string con el número 9. 
// Desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”. ¿Qué pasa si en vez de tener A == B, comprobamos que A === B?
let A = 9;
let B = "9";

if(A==B){
    console.log("son iguales")
}
if(A===B){
    console.log("No son lo mismo")
}

// Crea una variable mochila que sea un array de elementos. Desarrolla la lógica para que: 
// a) si mochila tiene más de 10 elementos, muestre por consola el mensaje “No puedo cargar con tantas cosas”;
// b) si mochila contiene entre 10 y 2 elementos, se muestre por consola “Qué bien voy con mi mochila”, y, si no,  muestre por consola “Creo q no necesito una mochila”.
let mochila = [];
if(mochila.length>10){
    console.log("No puedo cargar ocn tantas cosas")
}
if(mochila.length>=2 && mochila.length<=10){
console.log("que bine estoy con mi omchila")
}
else{
    console.log("creo que necesitin una omchila")
}

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10.
let valor = 0;
while (valor<=10){
    console.log(valor)
    valor++;
}
// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario en el que si diaFestivo es true devuelva un console.log de
//  ‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.
let diaFestivo = true;
if(diaFestivo){
    console.log("Hoy no trabajo")
}
else{
    console.log("Hoy trabajo")
}

// Crea una variable arrayBucle tipo array vacía y rellénala con números del 4 al 18 utilizando un bucle.
let arrayBucle = [];
let number=0;
for(let i=0; i<=18; i++){
    if(i>=4){
        arrayBucle.push(i);
        console.log(arrayBucle)
    }
}
// Recorre la variable creada anteriormente arrayBucle, suma todos sus elementos y guárdalos en una variable de nombre resultado.
let resultado = 0;
for(let i=0; i<arrayBucle.length; i++){
resultado += arrayBucle[i];
}
console.log(resultado)
// Dado el siguiente array [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle for of y muestra por consola todos sus elementos. 
// Después, recórrelo utilizando el bucle for in mostrando también por consola todos sus elementos.
let array= ["Con", "Sofia", "aprendiendo", "bucles"];
for(let value of array){
console.log(value)
}
for(let valuu in array){
    
console.log(valuu)
}
// Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.
let j=0;
while(j>=20){
    if(j % 3 == 0){
        console.log("Patata");
        j++;
    }
}