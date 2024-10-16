console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const titulo = document.getElementById("gen-1");
titulo.innerText = "Generasión 1 Pokimon";
// 2. Cambia el color de fondo de la primera generación de Pokimon.
titulo.style.background = "red"
// 3. Imprime por consola la URL de la página.
console.log(document.URL)
// 4. Imprime por consola el dominio de la página.
console.log(document.domain)
// 5. Imprime todos los nodos de imagen.
console.log(document.querySelectorAll("img"))
// console-log(document.)
// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const gif = document.querySelectorAll(".img-fixed");
for (let i = 0; i < gif.length; i++) {
    gif[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
    
}
// *Premium:*

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos 
// los Pokimon voladores `itype flying`
const volar = document.querySelectorAll(".flying");
for (let i = 0; i < volar.length; i++) {
    volar[i].parentElement.parentElement.parentElement.setAttribute("style", "background-color:red")
    
}