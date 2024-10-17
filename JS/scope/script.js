// 1 Formulario concacto LocalStorage
// Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje

// Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados en un objeto de JS
// Guardar en Local Storage el objeto consoleado antes (sólo guarda un usuario)
// Debería ver el local storage guardado de la siguiente manera:
// Muestra el usuario que has guardado en el DOM (en el HTML)
// Pista: utiliza JSON.parse() y JSON.stringify() 


const inputName = document.getElementById("nombre")
const inputMail = document.getElementById("correo")
const inputMessage = document.getElementById("mensaje")
const btn = document.getElementById("btn")
const tintero = document.getElementById("Splatoon")

let dataForm ={
    name : "",
    mail : "",
    message: "",
}


// localStorage.setItem("data", JSON.stringify(dataForm))
// document.getElementById()


function saveForm(e){
    e.preventDefault();
    //rellenamos el objeto con los inputs
    dataForm.name = inputName.value;
    dataForm.mail = inputMail.value;
    dataForm.message = inputMessage.value;
    //
    localStorage.setItem("InformacionUsuario", JSON.stringify(dataForm));
    //pintaName()
    console.log(dataForm);
}
function pintaName() {
    const localName = localStorage.getItem("nombre")
    Splatoon.innerText = localName
}
pintaName();
btn.addEventListener("click",saveForm)