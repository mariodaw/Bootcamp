//Igual no se leer, sera así creo 

class Person {
    constructor( nombre, años, genero) {
        (marca, modelo, antiguedad, color, tipo) 
      this.nombre = nombre;
      this.años = años;
      this.genero = genero;
    }
   static obtDetails() {
      console.log("Me llamo " + this.nombre + " tengo " + this.años + " y mi genero es " + this.genero);
    }
  }

  class Student extends Person {
    constructor (nombre, años, genero, curso, grupo){
        alumno(nombre, años, genero)
        
      this.curso = curso;
      this.grupo = grupo;
    }
      static register() {
              console.log("Estoy estudiando " + this.curso + " y estoy en el  " + this.grupo);
    }
    
  }
  class teacher extends Person {
    constructor (nombre, años, genero, asignatura, nivel){
        alumno(nombre, años, genero)
        
      this.asignatura = asignatura;
      this.nivel = nivel;
    }
      static register() {
        console.log("Estoy estudiando " + this.asignatura + " y tengo un nivel " + this.nivel);
    }
    
  }


//class Person {
//     constructor( nombre, años, genero) {
      
//       this.nombre = nombre;
//       this.años = años;
//       this.genero = genero;
//     }
//    static obtDetails() {
//       console.log("Me llamo " + this.nombre + " tengo " + this.años + " y mi genero es " + this.genero);
//     }
//   }

//   class Student {
//     constructor( curso, grupo) {
      
//       this.curso = curso;
//       this.grupo = grupo;
//     }
//    static register() {
//       console.log("Estoy estudiando " + this.curso + " y estoy en el  " + this.grupo);
//     }
//   }
//   class teacher {
//     constructor( asignatura, nivel) {
      
//       this.asignatura = asignatura;
//       this.nivel = nivel;
//     }
//    static register() {
//       console.log("Estoy estudiando " + this.asignatura + " y tengo un nivel " + this.nivel);
//     }
//   }