/**
 * Crear un array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N
 */
let longitud = 8;

function crearArray(n) {
    let array = [];

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            array[i] = i + 1;
        } 
    }

    return array;
}

let resultado = crearArray(longitud);
console.log(resultado);