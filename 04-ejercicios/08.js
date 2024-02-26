/**
 * crear un algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */
let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Felipe",
}, {
    id: 3,
    name: "Chanchito",
}];

function toPairs(arr) {
    let arrayPares = [];

    // for (let i = 0; i < arr.length; i++) {
    //     arrayPares[i] = [arr[i].id, arr[i]];
    // }

    for (idx in arr) { // for in permite obtener los indices
        arrayPares[idx] = [arr[idx].id, arr[idx]];
    }

    return arrayPares;
}

let resultado = toPairs(array);
console.log(resultado)