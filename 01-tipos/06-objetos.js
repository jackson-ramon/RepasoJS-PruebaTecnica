// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", // par llave-valor, nombre se conoce como propiedad
    anime: "Demon slayer",
    edad: 16,
}; // {} objeto literal
console.log(personaje);
// Acceder a elementos de un objeto
console.log(personaje.nombre);
console.log(personaje["anime"]);

// Modificar elementos de un objeto
personaje.edad = 13;

personaje["edad"] = 16;

// Eliminar propiedades
delete personaje.anime;

console.log(personaje);