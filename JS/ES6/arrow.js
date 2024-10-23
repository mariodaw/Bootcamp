// Funciones flecha
// Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }
const saludar = () => "Hola";
// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }
const divison = (a,b) => a/b;
// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }
const miNombre =  name =>  "Mi nombre es" `${name}`;
// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// };

const test2  = () =>  console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback(); 
// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {nombre: "Jamiro",
          edad: 45,},
        {nombre: "Juan",
          edad: 35,},
        {nombre: "Paco",
          edad: 34,},
        {nombre: "Pepe",
          edad: 14,},
        {nombre: "Pilar",
          edad: 24,},
        {nombre: "Laura",
          edad: 24,},
        {nombre: "Jenny",
          edad: 10,},
      ];
// Crea un array con la gente mayor de 25 años y muéstralo por consola.
// Crea un array con la gente que empieza por J. 
// const personas = [];
gente.forEach((persona) => {
        if (persona.edad>25) {
            console.log(persona);
            personas.push(gente.name);
        }
     });
     
gente.forEach((persona) => {
    if (persona.nombre[0]=="J") {
            console.log(persona);
            personas.push(gente.name);
        }
     });
     

// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
// const personas = gente.map((persona)=> persona.edad>25)

// Crea un array con la gente que empieza por J. 
// const personas = gente.map((persona)=> persona.nombre[0]=="J")

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
//  const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const elevados = numbers.map((elevado)=> elevado=elevado*elevado);

// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]




// 4. Filter
// Crea un segundo array que devuelva los impares
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impar = numbers.filter((num)=> num%2!=0)
// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */
      const veganPlate= foodList.filter((vegetal)=>foodList.isVeggie==false)

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numbers = [39, 2, 4, 25, 62];
const sum = numbers.reduce((a,b)=> a*b)

// Salida--> 483600


