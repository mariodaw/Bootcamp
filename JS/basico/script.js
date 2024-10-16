// Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.
function resta(a, b) {
    return a - b;
}
console.log(resta(3, 1))
// Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
function notas(a) {
    switch (a) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4: console.log("Insuficiente"); break;
        case 5:
        case 6: console.log("Suficiente."); break;
        case 7:
        case 8: console.log("Notable."); break;
        case 9:
        case 10: console.log("Sobresaliente."); break;
        default:
            console.log("No es una nota");
            break;
    }
}
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.
function duplicaNumero(a) {
    if (typeof a == "number") {
        return Math.pow(a, 2);
    }
    return "No es un nuemro";
    // Devolver siempre algo con return no solamente un console.log
}

console.log(duplicaNumero(2));
// Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
function caracterInicial(a) {
    if (a.length == 0) {
        return "Bro, esto no tiene na";
    }
    if (typeof a == "string") {
        return a.charAt(0);
    }
    return "No es un texto";
    // poner los return en cada caso al usar if o en cada posible caso
    // Primero ley de la progrmacion si funciona no lo toques
}
console.log(caracterInicial("Mario"));

// Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
function ultimoCaracter(a) {
    if (a.length == 0) {
        return"Bro, esto no tiene na";
    }
    if (typeof a == "string") {
        return a.charAt(a.length - 1);
    }
    return"No es un texto";
    // poner los return en cada caso al usar if o en cada posible caso
}
console.log(ultimoCaracter("Mario"));

// Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
function cuentaCaracteres(a) {
    if (a.length == 0) {
        console.log("Bro, esto no tiene na")
    }
    if (typeof a == "string") {
        return (a.length);
    }
    console.log("No es un texto")
}
console.log(cuentaCaracteres("Mario"));

// Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.
function esPalindromo(a) {
    if (typeof a == "string" && a.length > 0) {
        let z = a.split("").reverse().join("");
        if (z == a) {
            return "Es un palindromo"
        }
        else {
            return "No es un palindromo"
        }
    }
    // if (a.length==0){
    //     console.log("Bro, esto no tiene na")
    // }
    // if(typeof a == "string"){
    //     for(let i=0; i<a.length; i++){
    //         console.log(a.charAt(i))
    //         console.log(a.charAt(a.length-i))
    //     if(a.charAt(i) == a.charAt(a.length-i)){
    //         let y=0;
    //         y++;
    //     }
    //     if(y==a.length){
    //         console.log("Es un palindromo");
    //     }
    //  }
    //     }
    // console.log("No es un texto")
}
console.log(esPalindromo("sometemos"));

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
function getPrecioMostrar(a) {
    if (typeof a == "number") {
        return a.toFixed(2);

        //  let z = a.toString();
        // if(z.length>=1){
        //     z.push(".00")
        //     return a+z;
        // }
        // if(z.length>=2){
        //     z.push("0")
        //     return a+z
        // }
    } else {
        return "no lo se crack solo quiero numeros"
    }
}
console.log(getPrecioMostrar(3.2));

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.
function division(a, b) {
    return a / b;
}
console.log(division(9, 2))
// Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].
let tiraeta = [1, 5, 2, 4, 6, 9, 2, 11];
function mayorCinco(a) {
    let mayorcitos = [];
    for (let i = 0; i < a.length; i++) {
        
        if (a[i] >= 5) {
            // a[i].push(mayorcitos)
            mayorcitos.push(a[i]);
        }
    }
    return mayorcitos
}
console.log(mayorCinco(tiraeta))
// Crea una función que nos pida un número por prompt y que nos indique si es o no un número primo. Debe devolver true si es primo, sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

function numeroPrimo(){
    let a = prompt("Dime un numero")
    a = +a;
    if(typeof a == "number"){
        let x=0;
        for (let i=0; i<=a; i++){
            
            if(a % i == 0){
                
                x++
            }
        }
        
        if(x==2){
            alert("Es un numero primo") ;
        }
        else{
            alert ("No es un numero primo");
        }
    }
}
(numeroPrimo());
